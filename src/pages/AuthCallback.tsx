import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

/**
 * AuthCallback Page
 *
 * This page handles the OAuth redirect callback. After Google OAuth completes,
 * users are redirected here. We check if they have a complete profile and
 * redirect accordingly:
 * - If profile is complete (has company_name): redirect to /dashboard
 * - If profile is incomplete: redirect to /complete-profile
 * - If not authenticated: redirect to /login
 */

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    handleAuthCallback();
  }, []);

  const handleAuthCallback = async () => {
    try {
      // Get the current session after OAuth redirect
      const { data: { user }, error: authError } = await supabase.auth.getUser();

      if (authError || !user) {
        // Authentication failed, redirect to login
        navigate('/login');
        return;
      }

      // Wait a moment for Supabase triggers to complete (if any)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if profile exists
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('company_name')
        .eq('id', user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        // Error other than "not found"
        console.error('Error checking profile:', profileError);
        navigate('/login');
        return;
      }

      // If profile doesn't exist, create it now
      if (!profile) {
        const betaEndDate = new Date();
        betaEndDate.setDate(betaEndDate.getDate() + 45);

        const { error: insertError } = await supabase
          .from('profiles')
          .insert({
            id: user.id,
            email: user.email!,
            full_name: user.user_metadata?.full_name || null,
            beta_user: true,
            beta_status: 'active',
            beta_start_date: new Date().toISOString(),
            beta_end_date: betaEndDate.toISOString(),
            monthly_resume_limit: 100,
            resumes_used_this_month: 0,
            last_reset_date: new Date().toISOString(),
            feedback_submitted: false,
          });

        if (insertError) {
          console.error('Error creating profile:', insertError);
        }

        // Profile created without company_name, redirect to complete profile
        navigate('/complete-profile');
        return;
      }

      // Check if profile has company_name
      if (!profile.company_name) {
        // Missing company_name, redirect to complete profile
        navigate('/complete-profile');
        return;
      }

      // Profile is complete, redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error('Error in auth callback:', err);
      navigate('/login');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        textAlign: 'center',
        color: '#1A2F40'
      }}>
        <div style={{
          fontSize: '18px',
          marginBottom: '16px'
        }}>
          Completing sign in...
        </div>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid rgba(26, 47, 64, 0.2)',
          borderTop: '4px solid #F19025',
          borderRadius: '50%',
          margin: '0 auto',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AuthCallback;
