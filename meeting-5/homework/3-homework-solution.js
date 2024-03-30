console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

// Homework-3 (Using Promises)

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersDB.hasOwnProperty(email)) {
        const emailName = email.split('@');
        console.log(`Now we have the data of user: ${emailName[0]}`);
        resolve({ userEmail: email });
      } else {
        reject("User not found!");
      }
    }, 3000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersDB.hasOwnProperty(email)) {
        resolve(usersDB[email]);
      } else {
        reject("Videos not found!");
      }
    }, 2000);
  });
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (video && video.title) {
        resolve(video.title);
      } else {
        reject("Video Title not found!");
      }
    }, 2000);
  });
}

function getPassedUsersFirstVideoTitle(user) {
  loginUser(user, "1234")
    .then((result) => {
      console.log("user:", result);
      return getUserVideos(result.userEmail);
    })
    .then((videos) => {
      console.log("videos:", videos);
      return videoDetails(videos[0]);
    })
    .then((title) => {
      console.log("title:", title);
    })
    .catch((error) => {
      displayError(error);
    });
}

getPassedUsersFirstVideoTitle("user3@hw.js");



console.log("Finish");