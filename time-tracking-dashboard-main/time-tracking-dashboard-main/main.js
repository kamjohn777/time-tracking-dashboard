// This function sets the background image icons to each div container
document.addEventListener("DOMContentLoaded", function () {
  // Array of image paths
  const imagePaths = [
    "./images/icon-work.svg",
    "./images/icon-play.svg",
    "./images/icon-study.svg",
    "./images/icon-exercise.svg",
    "./images/icon-social.svg",
    "./images/icon-self-care.svg",
  ];

  // Select all elements with the class 'image-div'
  const imageDivs = document.querySelectorAll(".tracking-divs");

  // Use forEach to loop through each div and set the background image
  imageDivs.forEach((div, index) => {
    div.style.backgroundImage = `url('${imagePaths[index]}')`;
  });
});


// Fetching JSON
const jsonPath = '/data.json';
// const jsonPath = './data.json';
// const jsonPath = 'http://127.0.0.1:8080/data.json';

fetch(jsonPath)
  .then(res => {
    if(!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
      return res.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Fetch error:", error);
  })

  console.log(jsonPath);