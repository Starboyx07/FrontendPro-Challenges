// write your JavaScript here
function validation(){
    const email = document.getElementById("email").value;
    const mailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const msg = document.getElementById("error");
    if(mailPattern.test(email)){
        alert("Subscription Successfull!!!");
    }else{
        msg.style.display = "block";
    }
    return false;
}