
  
  // Set the configuration for your app
      // TODO: Replace with your app's config object
      var firebaseConfig = {
        // apiKey: '<your-api-key>',
        authDomain: 'badbunny-ep.firebaseapp.com',
        databaseURL: 'https://badbunny-ep-default-rtdb.firebaseio.com/',
        storageBucket: 'gs://badbunny-ep.appspot.com'
      };

      firebase.initializeApp(firebaseConfig);

        var storage = firebase.storage();
        var storageRef = storage.ref();
              // Create a reference to the file we want to download
        var storageRef = storageRef.child('artists/A.jpg');

        // Get the download URL
        storageRef.getDownloadURL().then(function(url) {
          // Insert url into an <img> tag to "download"
        }).catch(function(error) {

          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/object-not-found':
              // File doesn't exist
              console.log("File doesn't exist");
              break;

            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              console.log("User doesn't have permission to access the object");
              break;

            case 'storage/canceled':
              // User canceled the upload
              console.log("User canceled the upload");
              break;

            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              console.log("Unknown error occurred, inspect the server response");
              break;
          }
        });
