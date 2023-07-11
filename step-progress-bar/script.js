const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentIndex = 1;
next.addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex > circles.length){
        currentIndex = circles.length;
    }
    upadate();
})

prev.addEventListener('click',()=>{
    currentIndex--;
    if(currentIndex < circles.length){
        currentIndex = 1;
    }
    upadate();
})


function  upadate(){
    circles.forEach((circle,i)=>{
        if(i < currentIndex){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll(".active");
    progress.style.width = ( (actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if(currentIndex === 1){
        prev.disabled = true;
    } else if( currentIndex === circles.length){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
}