const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres.zgevclinpwbiguyeqegi:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnZXZjbGlucHdiaWd1eXFlZWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMDYyOTEsImV4cCI6MjAzNzg4MjI5MX0.gd_YS9b7jC1eVEh163t19MtiiJ2y_DcpeRD4orxSO5U@aws-0-us-west-1.pooler.supabase.com:6543/postgres'
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
