
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQ8E1G2SVD6yurn8orm6RL4hQh_hoNNQc",
    authDomain: "prueba-auth-7621f.firebaseapp.com",
    databaseURL: "https://prueba-auth-7621f.firebaseio.com",
    projectId: "prueba-auth-7621f",
    storageBucket: "prueba-auth-7621f.appspot.com",
    messagingSenderId: "834818789770"
  };
  firebase.initializeApp(config);

function getId(id){
  return document.getElementById(id);
}

getId('logGoogle').addEventListener('click', function(){
  console.log("entraste");
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result){
    var user = result.user;
    console.log("el usuario es" + user.displayName)
    console.log(user);
  })
  .catch(function(err){
    console.log("hubo un error" + err)
  })
})
