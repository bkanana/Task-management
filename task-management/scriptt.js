var firebaseCofig = {
    apiKey: "AIzaSyDDzQmZlrPDJ-JT9Yc3V3Kq4dUSA8_niJM",
    authDomain: "plp-apps-37cb7.firebaseapp.com",
    projectId: "plp-apps-37cb7",
    storageBucket: "plp-apps-37cb7.appspot.com",
    messagingSenderId: "764486946703",
    appId: "1:764486946703:web:210fac33827e04d2f245fa"
};
firebaseCofig.initializeApp(firebaseCofig);

const db = firebase.firestone();
//function to add tasks
function addTask(){
    const taskInput = document.getElementById("task-input");
    const task = taskInput.value.trim();
    if(task !==""){
        db.collection("tasks").add({
            task: task,
            timestamp: firebase.firestone.fieldValue.serverTimestamp()
        });
        taskInput.value = "";
        console.log("task added.")
    }
}