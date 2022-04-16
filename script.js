let add = document.querySelector('.add-parent');
let all = document.querySelector('.all-parent-2')
add.addEventListener('click', (event) => {
    all.style.display = 'block';
    all.style.position = 'absolute'
})



let addButtonSecond = document.querySelector('.add-parent-2');
let input = document.querySelector('.input');
let ul = document.querySelector('ul');
let tip = document.querySelector('.tip')

input.addEventListener('keyup', (event) => {
    if (input.value.length < 1) {
        tip.style.display = 'block';
    } else {
        tip.style.display = 'none';
    }

})

addButtonSecond.addEventListener('click',addToUI)
function addToUI(event)  {
    if (input.value.length > 0) {
        let input = document.querySelector('.input');
        let li = document.createElement('li');
        li.classList.add('li');
        li.append(input.value);
        ul.append(li);
        input.value = ''
        all.style.display = 'none';
        let image = document.createElement('img');
        image.src = 'images/delete.png';
        image.style.height = '20px';
        image.style.width = '20px';
        image.classList.add('delete-image')
        li.append(image)
        let list = document.querySelector('.list-frame ul');
        image.addEventListener('click', () => {
            list.removeChild(li)
        })
 
    }
    else {
        tip.style.display = 'block';
    }

}
document.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        addToUI();
    }
})

let second = document.querySelector('.delete2');


second.addEventListener('click', () => {
    all.style.display = 'none'
})

let sort = document.querySelector('.sortdown-hover');



function sortList() {
    let btn = document.querySelectorAll('li');
    let txt = [];
    btn.forEach(items => {
        txt.push(items.innerText)
    });
    txt.sort();
    let list = document.querySelector('.list-frame ul');
    

    btn.forEach((item, index) => { 
            item.innerHTML=` ${txt[index]}<img class = 'ex'  style = "width="20px";  height="20px"; src="images/delete.png" alt="delete"  >` 
       
          item.children[0].addEventListener("click",function(e){
           item.remove()
          })
    })

    
    }



sort.addEventListener('click', sortList)
let aaa_1 = document.querySelector('.sortdown');
let aaa = document.querySelector('.sortdown-hover');
let bbb_1 = document.querySelector('.sortup');
let bbb = document.querySelector('.sortup-hover');

aaa.addEventListener('click', ()=>{
    aaa_1.style.display = 'none'
    aaa.style.display = 'none'
    bbb_1.style.display = 'block'
});

bbb_1.addEventListener('mouseover', (event)=>{
    event.target.style.display = 'none';
    bbb.style.display = 'block'
})

bbb_1.addEventListener('mouseout', (event)=>{
    event.target.style.display = 'block';
    bbb.style.display = 'none'
})


bbb.addEventListener('click', reverseSort)  // burada tersine sortlamani yazacaqsan
function reverseSort(){
    bbb.style.display = 'none';
    bbb_1.style.display = 'none';
    aaa.style.display = 'none'
    aaa_1.style.display = 'block';


    let btn = document.querySelectorAll('li');
    let txt = [];
    btn.forEach(items => {
        txt.push(items.innerText)
    });
    txt.sort();
    let list = document.querySelector('.list-frame ul');

    btn.forEach((item, index) => { 
            item.innerHTML=`${txt[txt.length - 1 - index]} <img class = 'ex'  style = "width='20px';  height='20px'"; src="images/delete.png" alt="delete">`
            
       
          item.children[0].addEventListener("click",function(e){
           item.remove()
          })
    })
}

aaa_1.addEventListener('mouseover', (event)=>{
    event.target.style.display = 'none';
    aaa.style.display = 'block'
})

aaa_1.addEventListener('mouseout', (event)=>{
    event.target.style.display = 'block';
    aaa.style.display = 'none'
})