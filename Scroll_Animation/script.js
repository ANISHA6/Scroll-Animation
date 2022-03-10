//Now add the class dianamically to see the content as soon as we scroll down
const boxes=document.querySelectorAll('.content');
//here boxes is like array

window.addEventListener("scroll", checkBoxes);

function checkBoxes(){
    // basrd on the heoght of window we need to show the cards
    const triggerBotton=window.innerHeight;
    // bottom height of the every cards
    boxes.forEach(box =>{
        const boxBottom=box.getBoundingClientRect().bottom;
        if(boxBottom<triggerBotton){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}
