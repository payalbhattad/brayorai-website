import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  company_name?: string;
  beta_user: boolean;
  beta_start_date: string;
  beta_end_date?: string;
  beta_status: string;
  monthly_resume_limit: number;
  resumes_used_this_month: number;
  last_reset_date: string;
  feedback_submitted: boolean;
  created_at: string;
  updated_at: string;
}
