//load from supabase this need to migrate in .env
const supabaseUrl = 'https://zfbvbizomnkhcalamgrr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmYnZiaXpvbW5raGNhbGFtZ3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDgxNzAsImV4cCI6MjA1NDc4NDE3MH0.HYaKDX30CUF-nfsBg6ERGxrx3RuMTqNDWLZQ_G1uevg';
const supabase_ = supabase.createClient(supabaseUrl, supabaseKey);

async function resetPassword(event) {
    event.preventDefault();
    const newPassword = document.getElementById("password").value;

    const { error } = await supabase_.auth.updateUser({ password: newPassword });

    if (error) {
        document.getElementById("message").textContent = error.message;
    } else {
        document.getElementById("message").textContent = "Password reset successful! You can now log in.";
        window.location.replace("./signin.html")
    }
}