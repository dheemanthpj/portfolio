document.addEventListener("DOMContentLoaded", () => {
  const bioToggle = document.querySelector("#bio-toggle");
  const bioData = document.querySelector(".bio-data");

  bioToggle.addEventListener("click", () => {
    bioData.classList.toggle("hidden");
    
    // Toggle button text based on the visibility of the bio data
    bioToggle.textContent = bioData.classList.contains("hidden") 
      ? "Show Bio Data" 
      : "Hide Bio Data";
  });
});
