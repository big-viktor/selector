const selector = document.querySelector('.container-select');
const list = document.querySelector('.list');
const down = document.querySelector('.down');
let searchs = false;


const btnAddClass=()=>{
    if(searchs){
        list.classList.remove("delet");
        down.classList.add("up");
        searchs = false;
    }else {
        searchs = true;
        down.classList.remove("up");
        list.classList.add("delet");
    }
    
    // list.classList.remove("delet_div");
}
selector.addEventListener("click",btnAddClass);

const selectorTwo = document.querySelector('.container-select-two');
const listTwo = document.querySelector('.list-two');
const downTwo = document.querySelector('.down-two');


const btnAddClassTwo=()=>{
    if(searchs){
        listTwo.classList.remove("delet");
        downTwo.classList.add("up");
        searchs = false;
    }else {
        searchs = true;
        downTwo.classList.remove("up");
        listTwo.classList.add("delet");
    }
    
    // list.classList.remove("delet_div");
}
selectorTwo.addEventListener("click",btnAddClassTwo);
