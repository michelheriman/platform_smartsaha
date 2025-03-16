//load from supabase this need to migrate in .env
const supabaseUrl = 'https://zfbvbizomnkhcalamgrr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmYnZiaXpvbW5raGNhbGFtZ3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDgxNzAsImV4cCI6MjA1NDc4NDE3MH0.HYaKDX30CUF-nfsBg6ERGxrx3RuMTqNDWLZQ_G1uevg';
const supabase_ = supabase.createClient(supabaseUrl, supabaseKey);


async function signIn(email, password) {
    const { data, error } = await supabase_.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      console.error("Sign-in error:", error.message);
      alert("Error: " + error.message);
      return;
    }

    else{
  
    console.log("User signed in successfully:", data.user);
    alert("Welcome back, " + data.user.username + "!");
    window.location.href = "./index.html" // to be replaced
    }
  }

document.getElementById("submit_").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await signIn(email, password);
  });