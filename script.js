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
      // Create label for faint whisky name above the circle
      const label = document.createElement("div");
      label.className = "whisky-label";
      label.textContent = whisky.name;

      // Position the label above the circle
      label.style.position = "absolute";
      label.style.top = "25px";  // Adjust this if needed
      label.style.left = "50%";
      label.style.transform = "translateX(-50%)"; // Center the text

      circle.appendChild(label);


      // Add event listener for modal popup
      circle.addEventListener("click", () => showModal(whisky));

      container.appendChild(circle);
    });
  });
}

// Dropdown
document.getElementById("recommendation").addEventListener("click", showComingSoon);
document.getElementById("whisky-search").addEventListener("click", showComingSoon);
document.getElementById("technical-info").addEventListener("click", showComingSoon);
document.getElementById("github").addEventListener("click", showComingSoon);

// Function for dropdown menu click actions
function showComingSoon(event) {
  event.preventDefault();
  alert("Coming soon!");
}

// Function to show the modal with whisky information
function showModal(whisky) {
  const whiskyTitle = document.getElementById("whisky-title");
  const whiskyImage = document.getElementById("whisky-image");
  const whiskyInfo = document.getElementById("whisky-info");
  
  whiskyTitle.textContent = `${whisky.name}'s flavor profile`; // Set the title
  whiskyImage.src = whisky.image; // Set the image
  whiskyImage.style.width = "auto"; // Reset width
  whiskyImage.style.height = "auto"; // Reset height
  // Set the whisky info with additional lines
  whiskyInfo.innerHTML = `
    ${whisky.info}<br>
    ${whisky.name} belongs to cluster ${whisky.family}, similar to ${whisky.examples}<br>
    <a href="https://whiskyanalysis.com/" target="_blank" style="color: blue; text-decoration: none;">
      Metacritic score: </a> ${whisky.score} &plusmn; ${whisky.scorestddev} (out of 10)
  `;

  modal.style.display = "flex";
}
// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Wait until the window has loaded to ensure proper container dimensions
window.onload = createCircles;

// Whisky Clusters
const whiskyClusters = [
  { color: "rgba(255, 87, 51, 1)", name: "Cluster A", description: "Rich, spicy, full-bodied whiskies with strong sherry influence." },
  { color: "rgba(255, 195, 0, 1)", name: "Cluster B", description: "Light and floral whiskies, often with honey and citrus notes." },
  { color: "rgba(239, 218, 156, 1)", name: "Cluster C", description: "Smooth and sweet whiskies with notes of caramel and vanilla." },
  { color: "rgba(175, 124, 3, 1)", name: "Cluster D", description: "Balanced whiskies with a mix of fruit, spice, and light smoke." },
  { color: "rgba(102, 99, 90, 1)", name: "Cluster E", description: "Peaty and smoky whiskies with strong earthy undertones." },
  { color: "rgba(88, 24, 69, 1)", name: "Cluster F", description: "Robust, intense whiskies with deep sherry and dried fruit notes." },
  { color: "rgba(144, 12, 63, 1)", name: "Cluster G", description: "Complex whiskies with a mix of spice, sweetness, and dark fruits." }
];

// Create Legend
// Function to normalize color formatting for comparison
function rgbToRgba(color) {
  if (color.startsWith("rgb(")) {
    return color.replace("rgb(", "rgba(").replace(")", ", 1)");
  }
  return color;
}

// Function to highlight whisky circles and labels based on cluster
function highlightCluster(color, description) {
  const circles = document.querySelectorAll(".circle");
  let clusterCircles = [];

  circles.forEach(circle => {
    // Convert to matching rgba format
    if (rgbToRgba(circle.style.backgroundColor) === color) {
      circle.classList.add("highlighted");
      circle.querySelector(".whisky-label").classList.add("highlighted-label");
      clusterCircles.push(circle);
    }
  });

  if (clusterCircles.length > 0) {
    showClusterDescription(clusterCircles, description);
  }
}

// Function to remove highlight from all circles
function removeHighlight(color) {
  const circles = document.querySelectorAll(".circle");

  circles.forEach(circle => {
    if (rgbToRgba(circle.style.backgroundColor) === color) {
      circle.classList.remove("highlighted");
      circle.querySelector(".whisky-label").classList.remove("highlighted-label");
    }
  });

  hideClusterDescription();
}

// Function to show cluster description under the group of circles
function showClusterDescription(clusterCircles, description) {
  let avgX = 0, avgY = 0;

  clusterCircles.forEach(circle => {
    const rect = circle.getBoundingClientRect();
    avgX += rect.left + rect.width / 2;
    avgY += rect.top + rect.height / 2;
  });

  avgX /= clusterCircles.length;
  avgY /= clusterCircles.length;

  let descriptionBox = document.getElementById("cluster-description");
  if (!descriptionBox) {
    descriptionBox = document.createElement("div");
    descriptionBox.id = "cluster-description";
    descriptionBox.className = "cluster-description";
    document.body.appendChild(descriptionBox);
  }

  descriptionBox.textContent = description;
  descriptionBox.style.left = `${avgX - 100}px`;
  descriptionBox.style.top = `${avgY + 100}px`; // Position below the cluster
  descriptionBox.style.display = "block";
}

// Function to hide cluster description
function hideClusterDescription() {
  const descriptionBox = document.getElementById("cluster-description");
  if (descriptionBox) {
    descriptionBox.style.display = "none";
  }
}

// Apply interactions to legend
const legendContainer = document.getElementById("legend-container");

whiskyClusters.forEach(cluster => {
  const legendItem = document.createElement("div");
  legendItem.className = "legend-item";
  legendItem.innerHTML = `
    <div class="legend-circle" style="background: ${cluster.color};"></div>
    <span>${cluster.name}</span>
  `;

  // Apply hover events
  legendItem.addEventListener("mouseenter", () => highlightCluster(cluster.color, cluster.description));
  legendItem.addEventListener("mouseleave", () => removeHighlight(cluster.color));

  legendContainer.appendChild(legendItem);
});
