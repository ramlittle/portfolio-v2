const MenuList = document.querySelector('.menu-list-container');

const url = '../data/menu.json';
let menuList=[];

function fetchData(){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
       displayData(data);
    })
}

function displayData(data){
    if(!data.length){
        return Header.insertAdjacentHTML('beforeend',`
            <a href = ''>No Menu List Found</a>
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
fetchData();




