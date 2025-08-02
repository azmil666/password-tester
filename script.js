document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("passwordInput");
    const button = document.getElementById("submitButton");
  
    const handlePasswordSubmit = () => {
      const password = input.value.trim();
  
      if (password) {
        sessionStorage.setItem("userPassword", password);
        
        // ✅ Call the wave animation AND redirect after it completes
        playWaveTransition(() => {
          window.location.href = "tips.html";
        });
      }
    };
  
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handlePasswordSubmit();
    });
  
    button.addEventListener("click", handlePasswordSubmit);
  });
  