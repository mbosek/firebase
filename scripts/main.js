var config = {
    apiKey: "AIzaSyA1NG72ONsiEoSDimqOQnvAJL2IpRBziZE",
    authDomain: "learn-firebase-16af2.firebaseapp.com",
    databaseURL: "https://learn-firebase-16af2.firebaseio.com",
    storageBucket: "learn-firebase-16af2.appspot.com",
};

firebase.initializeApp(config);

function Signer() {

    this.signInButtonByGoogle = document.getElementById('sign-in');
    this.signInButtonByGoogle.addEventListener('click', this.signIn.bind(this, 'google'));

    this.signInButtonByFb = document.getElementById('sign-in-fb');
    this.signInButtonByFb.addEventListener('click', this.signIn.bind(this, 'facebook'));

    this.signInButtonByTwitter = document.getElementById('sign-in-twitter');
    this.signInButtonByTwitter.addEventListener('click', this.signIn.bind(this, 'twitter'));

    this.signInButtonByGithub = document.getElementById('sign-in-github');
    this.signInButtonByGithub.addEventListener('click', this.signIn.bind(this, 'github'));

    this.signOutButton = document.getElementById('sign-out');
    this.signOutButton.addEventListener('click', this.signOut.bind(this));

    this.avatar = document.getElementById("avatar");
    this.username = document.getElementById('username');

    this.initFirebase();
}

Signer.prototype.initFirebase = function() {
    this.auth = firebase.auth();
    this.database = firebase.database();
    this.storage = firebase.storage();

    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

Signer.prototype.onAuthStateChanged = function(user) {
    if (user) {
        var avatar = user.photoURL;
        var username = user.displayName;

        this.avatar.src = avatar;
        this.username.textContent = username;

        this.signOutButton.removeAttribute('hidden');
        this.avatar.removeAttribute('hidden');
        this.username.removeAttribute('hidden');

        this.addData();
        this.loadData();
    } else {
        console.log('No user is signed in.');
    }
};

Signer.prototype.signIn = function(provider) {
    switch (provider) {
        case 'google':
            var provider = new firebase.auth.GoogleAuthProvider()
            break;
        case 'facebook':
            var provider = new firebase.auth.FacebookAuthProvider()
            break;
        case 'twitter':
            var provider = new firebase.auth.TwitterAuthProvider()
            break;
        case 'github':
            var provider = new firebase.auth.GithubAuthProvider()
            break;
    }
    this.auth.signInWithPopup(provider);
};

Signer.prototype.signOut = function() {
    this.auth.signOut();
    location.reload();
};

Signer.prototype.addData = function() {
    var currentUser = this.auth.currentUser;

    this.messagesRef = this.database.ref('users/' + currentUser.uid);
    this.messagesRef.off();

    this.messagesRef.set({
        username: currentUser.displayName,
        email: currentUser.email,
        photo: currentUser.photoURL || '/images/placeholder.png'
    });
};

Signer.prototype.loadData = function() {
    var currentUser = this.auth.currentUser;

    this.messagesRef = this.database.ref('users/' + currentUser.uid);
    this.messagesRef.off();

    this.messagesRef.once('value').then(function(user) {
        var username = user.val().username;
    });
};

window.onload = function() {
    window.signer = new Signer();
};