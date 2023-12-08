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

// function for displaying different data
const displayFunction = () => {
  // Element IDs daily,weekly,monthly view
  const dailyView = document.getElementById("daily-elm");
  const weeklyView = document.getElementById("weekly-elm");
  const monthlyView = document.getElementById("monthly-elm");

  // JSON Data
  const jsonData = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];
};

 // JSON Data
 const jsonData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];


  // Function to update content based on the selected timeframe
  // const updateContent = (timeframe) => {
  //   jsonData.forEach((data) => {
  //     console.log(`${data.title} - ${data.timeframes[timeframe].current} hours`);
      
  //     if()
  //   });
  // };

  const dailyView = document.getElementById("daily-elm");
  const weeklyView = document.getElementById("weekly-elm");
  const monthlyView = document.getElementById("monthly-elm");



  // Function to update content based on the selected timeframe
const updateContent = (timeframe) => {
  jsonData.forEach((data, index) => {
    const elementId = `track-${index + 1}`;

    // Get the container element for the current activity
    const activityContainer = document.getElementById(elementId);

    // Update the content based on the selected timeframe
    const content = `
      <div class="track-text-wrap">
        <p>${data.title}</p>
        <h2>${data.timeframes[timeframe].current} hours</h2>
        <p>Last Week - ${data.timeframes[timeframe].previous} hours</p>
      </div>
    `;

    // Replace the existing content with the updated content
    activityContainer.innerHTML = content;
  });
};

// Event listeners for the timeframe options
dailyView.addEventListener("click", () => updateContent("daily"));
weeklyView.addEventListener("click", () => updateContent("weekly"));
monthlyView.addEventListener("click", () => updateContent("monthly"));

// Initial setup, e.g., show daily content by default
updateContent("daily");

