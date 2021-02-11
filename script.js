const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", scrollAnimation)
const windowBottom = window.innerHeight / 6 * 5;

scrollAnimation()
function scrollAnimation(){

boxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop)
    if(boxTop<windowBottom){
        box.classList.add("show");
    }else{
        box.classList.remove("show");
    }
})
}