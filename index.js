document.addEventListener("DOMContentLoaded", function () {
  // Get all the experiment list items
  const experimentItems = document.querySelectorAll(".experiment");

  // Add a click event listener to each experiment list item
  experimentItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Redirect to the experiment page with the experiment ID in the URL
      window.location.href = `./experiments/experiment${index + 1}.html`;
    });
  });
});
