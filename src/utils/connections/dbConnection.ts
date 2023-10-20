import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const database = createClient('https://iwcctkfnnlvxghgfowsz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3Y2N0a2Zubmx2eGdoZ2Zvd3N6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzgxNjAyMCwiZXhwIjoyMDEzMzkyMDIwfQ.WrA6NvsBoGQp7v70k5zp5dpdQlxKLIKMt4lz1FLyvc8')

export default database;