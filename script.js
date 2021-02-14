let submit = document.getElementById("submit")
let lastMessage = document.getElementById("last-message")

// Function to display the message
function displayMessage(){
    var message = localStorage.getItem("message");
    lastMessage.innerText = message
    document.getElementById("message").value = ""
}

// Code block to add the message
submit.addEventListener("click", ()=> {
    let message = document.getElementById("message").value

    if(message != ""){
        console.log("ok")
        localStorage.setItem("message", message);
        displayMessage()
    }
})

displayMessage()
