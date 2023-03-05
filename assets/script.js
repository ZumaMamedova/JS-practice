let buttons=document.querySelectorAll(".btn");

//buttons[1].addEventlistener

buttons.forEach(button=>{
    button.addEventListener('click',function(){
        button.classList.toggle('fa-chevron-down');
        button.classList.toggle('fa-chevron-up');
        let prevAct = document.querySelector(".active");
        let currAct = button.nextElementSibling.nextElementSibling;
        if(prevAct && prevAct != currAct){
            prevAct.classList.toggle("d-none");
            prevAct.previousElementSibling.toggle("fa-chevron-down")
            prevAct.previousElementSibling.toggle("fa-chevron-up")
        }
        currAct.classList.toggle("active");
        //button.classList.toggle('fa-solid fa-chevron-up');

        button.nextElementSibling.nextElementSibling.classList.toggle('d-none');
    
    })
})


