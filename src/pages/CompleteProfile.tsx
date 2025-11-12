import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import logo from '../assets/logo.png';

/**
 * CompleteProfile Page
 *
 * This page is shown to users who sign up with Google OAuth but don't have
 * a company_name in their profile. It collects the missing information before
 * allowing them to proceed to the dashboard.
 */

const CompleteProfile: React.FC = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    checkAuthAndProfile();
  }, []);

  const checkAuthAndProfile = async () => {
    try {
      // Check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser();

      if (authError || !user) {
        // Not authenticated, redirect to login
        navigate('/login');
        return;
      }

      // Set user name for welcome message
      setUserName(user.user_metadata?.full_name || user.email?.split('@')[0] || 'there');

      // Check if profile already has company_name
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('company_name')
        .eq('id', user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        // Error other than "not found"
        console.error('Error checking profile:', profileError);
        setError('An error occurred. Please try again.');
        setCheckingAuth(false);
        return;
      }

      // If profile exists and has company_name, redirect to dashboard
      if (profile && profile.company_name) {
        navigate('/dashboard');
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
          setError('An error occurred. Please try again.');
        }
      }

      setCheckingAuth(false);
    } catch (err) {
      console.error('Error in checkAuthAndProfile:', err);
      setError('An error occurred. Please try again.');
      setCheckingAuth(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate company name
    if (!companyName.trim() || companyName.trim().length < 2) {
      setError('Please enter a valid company name (at least 2 characters)');
      return;
    }

    setLoading(true);

    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setError('Authentication error. Please try logging in again.');
        setLoading(false);
        return;
      }

      // Update profile with company name
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ company_name: companyName.trim() })
        .eq('id', user.id);

      if (updateError) throw updateError;

      // Success - redirect to dashboard
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'An error occurred while updating your profile');
      setLoading(false);
    }
  };

  // Show loading state while checking authentication
  if (checkingAuth) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#F9FAFB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          color: '#1A2F40',
          fontSize: '18px'
        }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      {/* Navigation Bar */}
      <nav style={{
        padding: '20px 40px',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          width: 'fit-content'
        }}>
          <img
            src={logo}
            alt="BrayorAI"
            style={{
              height: '48px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <span style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#1A2F40'
          }}>
            Brayor<span style={{ color: '#F19025' }}>AI</span>
          </span>
        </div>
      </nav>

      {/* Content Container */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        marginTop: '80px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          width: '100%',
          maxWidth: '440px',
          padding: '48px'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1A2F40',
              margin: '0 0 8px 0'
            }}>
              Complete Your Profile
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#6B7280',
              margin: '0 0 16px 0'
            }}>
              Welcome, {userName}!
            </p>
            <p style={{
              fontSize: '14px',
              color: '#6B7280',
              margin: 0
            }}>
              Just one more step to get started with BrayorAI
            </p>
          </div>

          {/* Progress Indicator */}
          <div style={{
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            <span style={{
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: '600',
              color: '#F19025',
              backgroundColor: '#FFF3E0',
              padding: '6px 12px',
              borderRadius: '20px'
            }}>
              Step 2 of 2
            </span>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{
              backgroundColor: '#FEE2E2',
              border: '1px solid #EF4444',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '20px'
            }}>
              <p style={{
                color: '#991B1B',
                fontSize: '14px',
                margin: 0
              }}>
                {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827',
                marginBottom: '8px'
              }}>
                Company Name *
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
                minLength={2}
                placeholder="Enter your company name"
                style={{
                  width: '100%',
                  padding: '12px',
                  fontSize: '16px',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#F19025'}
                onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
              />
              <p style={{
                fontSize: '12px',
                color: '#6B7280',
                marginTop: '6px',
                marginBottom: 0
              }}>
                This helps us personalize your experience
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#FFFFFF',
                backgroundColor: loading ? '#D1D5DB' : '#F19025',
                border: 'none',
                borderRadius: '8px',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.backgroundColor = '#D97706';
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.backgroundColor = '#F19025';
              }}
            >
              {loading ? 'Saving...' : 'Continue to Dashboard'}
            </button>
          </form>

          {/* Optional Skip Link (commented out - uncomment if company_name should be optional) */}
          {/* <div style={{
            textAlign: 'center',
            marginTop: '16px'
          }}>
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                background: 'none',
                border: 'none',
                color: '#6B7280',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Skip for now
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
