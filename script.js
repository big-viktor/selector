const selector = document.querySelector('.container-select');
const list = document.querySelector('.list');
const down = document.querySelector('.down');
console.log(selector);
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
