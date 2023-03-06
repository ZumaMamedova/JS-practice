let buttons=document.querySelectorAll(".btn");

//buttons[1].addEventlistener

buttons.forEach(button=>{
    button.addEventListener('click',function(){
        let prevAct = document.querySelector(".active"); 
        let currAct = button.nextElementSibling.nextElementSibling; 
        if(prevAct != null && prevAct != currAct){
            prevAct.classList.toggle('d-none'); 
            prevAct.classList.toggle("active");
            prevAct.previousElementSibling.firstElementChild.classList.toggle('fa-chevron-down');
            prevAct.previousElementSibling.firstElementChild.classList.toggle('fa-chevron-up');
        }
        currAct.classList.toggle('d-none'); 
        currAct.classList.toggle("active");
        button.nextElementSibling.firstElementChild.classList.toggle('fa-chevron-down');
        button.nextElementSibling.firstElementChild.classList.toggle('fa-chevron-up');
    })
})

