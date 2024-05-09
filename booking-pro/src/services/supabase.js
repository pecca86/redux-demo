import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://oxhvogqvwgzguvrfkxzv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aHZvZ3F2d2d6Z3V2cmZreHp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NjQ3NTUsImV4cCI6MjAzMDE0MDc1NX0.fz54aqLjMunV2W47HKa255rJSfnE1xgKqqMGRbrmta8";
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;