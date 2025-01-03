const container = document.getElementById("circle-container");
const modal = document.getElementById("whisky-modal");
const whiskyImage = document.getElementById("whisky-image");
const whiskyInfo = document.getElementById("whisky-info");

// Function to scale Cartesian coordinates to screen-relative coordinates
function convertToScreenCoordinates(x, y) {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // Convert Cartesian coordinates (-5 to 5) to screen coordinates
  //Lucas: limits are actually: x=[-4.57, 6.80],y=[-2.42, 3.94]
  //const screenX = (x + 5) / 10 * containerWidth; // Normalize from [-5,5] to [0,1] and scale
  //const screenY = (5 - y) / 10 * containerHeight; // Reverse y-axis and scale
  const screenX = x  * containerWidth;
  const screenY = y  * containerHeight;
  //const screenX = x;
  //const screenY = y;
  //const screenX = (x + 4.57) / 11.37 * containerWidth; // Normalize from [-5,5] to [0,1] and scale
  //const screenY = (3.94 - y) / 6.36 * containerHeight;
  //above hard inputs were all 5 except for 10 in the denominators
  return { screenX, screenY };
}

// Function to create whisky circles
function createCircles() {
  whiskies.forEach(family => {
    family.members.forEach(whisky => {
      const circle = document.createElement("div");
      circle.className = "circle";
      circle.style.backgroundColor = family.color;

      // Convert coordinates to screen-relative
      const { screenX, screenY } = convertToScreenCoordinates(whisky.x, whisky.y);

      circle.style.left = `${screenX}px`;
      circle.style.top = `${screenY}px`;

      // Tooltip for displaying whisky name
      const tooltip = document.createElement("span");
      tooltip.className = "tooltip";
      tooltip.textContent = whisky.name;
      circle.appendChild(tooltip);

      // Add event listener for modal popup
      circle.addEventListener("click", () => showModal(whisky));

      container.appendChild(circle);
    });
  });
}

// Function to show the modal with whisky information
function showModal(whisky) {
  whiskyImage.src = whisky.image;
  whiskyImage.style.width = "auto"; // Reset width
  whiskyImage.style.height = "auto"; // Reset height
  whiskyInfo.textContent = whisky.info;

  modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Wait until the window has loaded to ensure proper container dimensions
window.onload = createCircles;
