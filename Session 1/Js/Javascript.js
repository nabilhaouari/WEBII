"use strict"
window.onload = ()=>{
    console.log("Page loaded !")
Submit();
}
function Submit(){
    let submitButton = document.getElementById("submit");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let order = document.getElementById("order");
    let confirmation = document.getElementById("confirmation");
    submitButton.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log("Button works !");
        console.log(name.value);
        console.log(email.value);
        console.log(order.value);

confirmation.innerHTML=`The order for the customer ${name.value} is the following: ${order.value}. The customer may be notified by email: ${email.value}`;
        

    })
}