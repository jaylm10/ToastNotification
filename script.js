function notification() {
    const notifi = document.getElementsByClassName("notifi")[0];
    
    // Add the "active" class to make the notification visible
    notifi.classList.add("active");
    
    // Remove the "active" class after 2 seconds to hide the notification
    setTimeout(() => {
        notifi.classList.remove("active");
    }, 2000);
}

document.getElementsByClassName("failed")[0].addEventListener("click",()=>{

    const notifi = document.getElementsByClassName("notifi")[0];

    notifi.textContent=`Article Failed Succesfully`

})

document.getElementsByClassName("info")[0].addEventListener("click",()=>{

    const notifi = document.getElementsByClassName("notifi")[0];

    notifi.textContent=`Information updated`

})

document.getElementsByClassName("warning")[0].addEventListener("click",()=>{

    const notifi = document.getElementsByClassName("notifi")[0];

    notifi.textContent=`Warning.....`

})