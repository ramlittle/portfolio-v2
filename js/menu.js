const MenuList = document.querySelector('.menu-list-container');
const Header = document.querySelector('header');
const MenuButton = document.querySelector('.menu-button');
const CloseMenuButton=document.querySelector('.close-menu-button');
const MenuLogoContainer=document.querySelector('.menu-logo-container');
const MenuListContainer=document.querySelector('.menu-list-container');
const url = '../data/menu.json';

MenuButton.addEventListener('click',()=>{
    CloseMenuButton.style.display='inline'; 
    MenuButton.style.display='none';
    MenuLogoContainer.style.display='none';
    MenuListContainer.style.display='flex';
})

CloseMenuButton.addEventListener('click',()=>{
    CloseMenuButton.style.display='none'; 
    MenuButton.style.display='inline';
    MenuLogoContainer.style.display='flex';
    MenuListContainer.style.display='none';
})




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




