//load from supabase this need to migrate in .env
const supabaseUrl = 'https://zfbvbizomnkhcalamgrr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmYnZiaXpvbW5raGNhbGFtZ3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDgxNzAsImV4cCI6MjA1NDc4NDE3MH0.HYaKDX30CUF-nfsBg6ERGxrx3RuMTqNDWLZQ_G1uevg';
const supabase_ = supabase.createClient(supabaseUrl, supabaseKey);

async function resetPassword(event) {
    event.preventDefault();
    const newPassword = document.getElementById("password").value;

    // Get access token from URL
    const params = new URLSearchParams(window.location.hash.substring(1));
    const access_token = params.get("access_token");

    if (!access_token) {
      document.getElementById("message").textContent = "Invalid or missing token.";
      return;
    }

    // Update user password
    const { error } = await supabase_.auth.updateUser({ password: newPassword });

    if (error) {
      document.getElementById("message").textContent = error.message;
    } else {
      document.getElementById("message").textContent = "Password updated successfully!";
    }
  };
