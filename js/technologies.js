const TechnologiesList = document.querySelector('.technologies-container');

function fetchTechnologies(){
    fetch('../data/technologies.json')
    .then(res=>res.json())
    .then(data=>{
       displayTechnologies(data);
    })
}

function displayTechnologies(data){
    if(!data.length){
        return TechnologiesList.insertAdjacentHTML('beforeend',`
            <span>No Technologies Found</span>
        `)
    }
    //display menu list here
    for(let i=0;i<data.length;i++){
        TechnologiesList.insertAdjacentHTML('beforeend',`
            <h6>${data[i].title}</h6>
        `)
    }
}

//Obtain Menu and Display
fetchTechnologies();




