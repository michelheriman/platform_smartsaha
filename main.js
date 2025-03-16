//fetch the data from supabase


// Simulate fetching data (replace with your actual data fetching logic)
setTimeout(() => {
    const rain = 80;  // select the rainfall
    const evaporation = 70; // select the land evapotranspiration
    const period = "Last 30 Days"; // Example period

    const total = rain + evaporation;
    const rainPercentage = (rain / total) * 100;
    const evaporationPercentage = (evaporation / total) * 100;

    document.getElementById("rainValue").textContent = rain.toLocaleString();
    document.getElementById("evaporationValue").textContent = evaporation.toLocaleString();
    document.getElementById("period").textContent = period;

    document.getElementById("rainBar").style.width = `${rainPercentage}%`;
    document.getElementById("evaporationBar").style.width = `${evaporationPercentage}%`;

    document.getElementById("rainPercentage").textContent = `${rainPercentage.toFixed(0)}%`;
    document.getElementById("evaporationPercentage").textContent = `${evaporationPercentage.toFixed(0)}%`;

  }, 1000); // Simulate 1-second delay