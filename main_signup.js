//alert for accepting the rules 

//load from supabase this need to migrate in .env
const supabaseUrl = 'https://zfbvbizomnkhcalamgrr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmYnZiaXpvbW5raGNhbGFtZ3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDgxNzAsImV4cCI6MjA1NDc4NDE3MH0.HYaKDX30CUF-nfsBg6ERGxrx3RuMTqNDWLZQ_G1uevg';
const supabase_ = supabase.createClient(supabaseUrl, supabaseKey);

// Handle sign-up form submission
document.getElementById('submit_').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const full_name = document.getElementById('full_name').value;

    const message = document.getElementById('message');
    let mes = document.createElement('p');
    mes.className = "mt-4 text-center text-sm text-red-500";
    mes.textContent = "please check your email for confirmation.";
    message.appendChild(mes);
    //message.textContent = "please check your email for confirmation."

    const { data, error } = await supabase_.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          full_name,
        }
      }
    });

    if (error) {
      alert('Error: ' + error.message);
    } else {
      alert('Sign-up successful! Please check your email for confirmation.');
      window.location.href = './signin.html';
    }

    cooldown = true;
    setTimeout(() => {
        cooldown = false;
    }, 600000); // 1-minute cooldown
  });