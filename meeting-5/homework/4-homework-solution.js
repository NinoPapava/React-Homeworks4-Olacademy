console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

// Homework-4 (Using Async/Await)

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

async function getPassedUsersFirstVideoTitle(user) {
  try {
    const result = await loginUser(user, "1234");
    console.log("user:", result);

    const videos = await getUserVideos(result.userEmail);
    console.log("videos:", videos);

    const title = await videoDetails(videos[0]);
    console.log("title:", title);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPassedUsersFirstVideoTitle("user1@hw.js");




console.log("Finish");