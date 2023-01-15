export const showNotification = (msg)=>{

    const notificationElement = document.querySelector(".notification");
    
    notificationElement.innerHTML = msg;
    
    notificationElement.classList.add('notif-enter')
    
    setTimeout(()=>{
        notificationElement.classList.remove('notif-enter');
    }, 2000)
    
    };
    