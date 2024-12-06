function notification() {
    const notifi = document.getElementsByClassName("notifi")[0];
    
    // Add the "active" class to make the notification visible
    notifi.classList.add("active");
    
    // Remove the "active" class after 2 seconds to hide the notification
    setTimeout(() => {
        notifi.classList.remove("active");
    }, 2000);
}
  