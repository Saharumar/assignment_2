const firebaseConfig = {
    apiKey: "AIzaSyDFdoNIqAKsSn2So4diaFDNtzwOEiJpMA4",
    authDomain: "deva1-b7b37.firebaseapp.com",
    databaseURL: "https://deva1-b7b37-default-rtdb.firebaseio.com",
    projectId: "deva1-b7b37",
    storageBucket: "deva1-b7b37.appspot.com",
    messagingSenderId: "285215685040",
    appId: "1:285215685040:web:0badd87af051f2339e7e75",
    measurementId: "G-QGMHQGZM61"
  };

//initialize
firebase.initializeApp(firebaseConfig);

//reference your database

const contactFormDB = firebase.database().ref('contactForm')

document.getElementById("contactForm").addEventListener("submit" , submitForm)

function submitForm(e){

    e.preventDefault();

    var name = getElementById("name");
    var email = getElementById("email");
    var msgContent = getElementById("msgContent");

    console.log(name,email,msgContent);

    savemessages(name ,email,msgContent);

//enable alert
    document.querySelector(".alert").style.display = "block";

    //remove alert

    setTimeout(()=> {

        document.querySelector(".alert").style.display="none";
    }, 3000);

    document.getElementById("contactForm").reset();
}




const savemessages = (name , email, msgContent) => {

    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        msgContent: msgContent,
    });
}


const getElementById = (id) => {

    return document.getElementById(id).value;
};