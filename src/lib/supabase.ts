import { createClient } from "@supabase/supabase-js";
const PUBLIC_SUPABASE_URL = "https://jlkkzxybzwmsagtwacgh.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsa2t6eHliendtc2FndHdhY2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNzMyMjcsImV4cCI6MTk5ODY0OTIyN30.CZW1WqHOEb_C4oUg_qoMtLyn2mOmDD9tJTQ_pBUyBFw";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
export default supabase;
