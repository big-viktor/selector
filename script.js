const selector = document.querySelector('.container-select');
const list = document.querySelector('.list');
const down = document.querySelector('.down');
const selectList = document.querySelectorAll('.name');
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
    
        for (var i = 0; i < selectList.length; i++) {
            console.log(selectList[i].innerHTML);
            let name = selectList[i].innerHTML;
            selectList[i].onclick = function(){
                document.getElementById('text-name').innerHTML= name;
            };
    }
    
}
selector.addEventListener("click",btnAddClass);

const selectorTwo = document.querySelector('.container-select-two');
const listTwo = document.querySelector('.list-two');
const downTwo = document.querySelector('.down-two');
const selectListTwo = document.querySelectorAll('.name-two');

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
    
}
    for (var i = 0; i < selectListTwo.length; i++) {
        let name = selectListTwo[i].innerHTML;
        selectListTwo[i].onclick = function(){
            document.getElementById('text-name-two').innerHTML= name;
        };
}


selectorTwo.addEventListener("click",btnAddClassTwo);
