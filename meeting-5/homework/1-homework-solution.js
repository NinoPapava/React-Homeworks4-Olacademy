console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};


// Homework-1 (Using Callbacks)

function loginUser(email, password, callback) {
  setTimeout(() => {
    const emailName = email.split('@');
    console.log(`Now we have the data of user: ${emailName[0]}`);
    callback({ userEmail: email });
  }, 3000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(usersDB[email]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback(video.title);
  }, 2000);
}

const getPassedUsersFirstVideoTitle = (user) => {

  loginUser(user, "1234", (result) => {
    console.log("user:", result);

    getUserVideos(result.userEmail, (videos) => {
      console.log("videos:", videos);

      videoDetails(videos[0], (title) => {
        console.log("title:", title);

      })
    })
  })
}

getPassedUsersFirstVideoTitle("user1@hw.js");



console.log("Finish");