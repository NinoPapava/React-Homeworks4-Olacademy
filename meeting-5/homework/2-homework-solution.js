console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};


// Homework-2 (Using Callbacks +handle errors)



function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}


function loginUser(email, password, onSuccess, onError) {

  if (usersDB.hasOwnProperty(email)) {
    setTimeout(() => {
      const emailName = email.split('@');
      console.log(`Now we have the data of user: ${emailName[0]}`);
      onSuccess({ userEmail: email });

    }, 3000);
  } else {
    setTimeout(() => {
      onError("User not found!");
    }, 3000);
  }
}

function getUserVideos(email, onSuccess, onError) {
  if (usersDB.hasOwnProperty(email) && usersDB[email].length > 0) {
    setTimeout(() => {
      onSuccess(usersDB[email]);
    }, 2000);
  } else {
    setTimeout(() => {
      onError("Videos not found!");
    }, 2000);
  }
}

function videoDetails(video, onSuccess, onError) {
  if (video && video.title) {
    setTimeout(() => {
      onSuccess(video.title);
    }, 2000);
  } else {
    setTimeout(() => {
      onError("Video Title not found!");
    }, 2000);
  }
}


const getPassedUsersFirstVideoTitle = (user) => {

  loginUser(user, "1234", (result) => {
    console.log("user:", result);

    getUserVideos(result.userEmail, (videos) => {
      console.log("videos:", videos);

      videoDetails(videos[0], (title) => {
        console.log("title:", title);
      },
        (error) => {
          console.error("Error getting video details:", error);
        }
      );
    },
      (error) => {
        console.error("Error getting user videos:", error);
      }
    );
  },
    (error) => {
      console.error("Error logging in:", error);
    }
  );
}

getPassedUsersFirstVideoTitle("user3@hw.js");




console.log("Finish");