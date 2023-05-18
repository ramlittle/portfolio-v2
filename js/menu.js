const MenuList = document.querySelector('.menu-list-container');
const Header = document.querySelector('header');
const url = '../data/menu.json';

function fetchMenu(){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
       displayMenu(data);
    })
}

function displayMenu(data){
    if(!data.length){
        return Header.insertAdjacentHTML('beforeend',`
            <span>No Menu List Found</span>
        `)
    }
    //display menu list here
    for(let i=0;i<data.length;i++){
        MenuList.insertAdjacentHTML('beforeend',`
            <a href='${data[i].link}'>${data[i].title.toUpperCase()}</a>
        `)
    }
}

//Obtain Menu and Display
fetchMenu();




