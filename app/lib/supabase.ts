import 'react-native-url-polyfill';
import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ibaeuqmggpvkehbrdjxa.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliYWV1cW1nZ3B2a2VoYnJkanhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxODE2MjAsImV4cCI6MjA3OTc1NzYyMH0.PwiMvOpBg6sUqb5-8lwu23A4aKxUF0swOTd25UEjdy4';

export const supabase = createClient(SUPABASE_URL,SUPABASE_KEY); 