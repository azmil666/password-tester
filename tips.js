document.addEventListener("DOMContentLoaded", () => {
    const password = sessionStorage.getItem("userPassword") || "";
    const result = zxcvbn(password);
    
    const strengthsList = document.getElementById("strengths-list");
    const improvementList = document.getElementById("improvement-list");
    const strengthMeter = document.getElementById("strength-meter");
  
    // Clear previous
    strengthsList.innerHTML = "";
    improvementList.innerHTML = "";
  
    // Set strength meter bar
    const score = result.score; // 0 (very weak) to 4 (very strong)
    const meterColors = ["#ff0000", "#ff6600", "#ffcc00", "#66cc00", "#00ff00"];
    strengthMeter.style.backgroundColor = meterColors[score];
    strengthMeter.style.height = "20px";
    strengthMeter.style.borderRadius = "5px";
    strengthMeter.style.margin = "10px 0";
  
    // Add feedback - Suggestions
    if (result.feedback.suggestions.length > 0) {
      result.feedback.suggestions.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        improvementList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "Your password meets most strength requirements.";
      strengthsList.appendChild(li);
    }
  
    // Add warning if any
    if (result.feedback.warning) {
      const li = document.createElement("li");
      li.textContent = result.feedback.warning;
      improvementList.appendChild(li);
    }
  
    // Additional info (optional): crack time
    const liCrack = document.createElement("li");
    liCrack.textContent = `Estimated time to crack: ${result.crack_times_display.offline_fast_hashing_1e10_per_second}`;
    strengthsList.appendChild(liCrack);
  });
  