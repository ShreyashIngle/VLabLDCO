window.onload = function () {
  // Get all the experiment list items
  const experimentItems = document.querySelectorAll(".experiment-description ");

  // Add a click event listener to each experiment list item
  experimentItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Redirect to the experiment page
      window.location.href = "experiments.html";
    });
  });
};

window.onload = function () {
  // Get all the experiment list items
  const experimentItems = document.querySelectorAll(".experiment-title");

  // Add a click event listener to each experiment list item
  experimentItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Get the experiment title and ID
      const experimentTitle = item.innerText;
      const experimentId = item.dataset.experimentId;

      // Redirect to the experiment page with the experiment title and ID in the URL
      window.location.href = `experiments.html?title=${encodeURIComponent(
        experimentTitle
      )}&id=${encodeURIComponent(experimentId)}`;
    });
  });
};
