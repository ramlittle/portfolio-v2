const ServicesList = document.querySelector('.services-list');

function fetchServices(){
    fetch('../data/services.json')
    .then(res=>res.json())
    .then(data=>{
       displayServices(data);
    })
}

function displayServices(data){
    if(!data.length){
        return ServicesList.insertAdjacentHTML('beforeend',`
            <span>No Services Found</span>
        `)
    }
    //display work exp list here
    for(let i=0;i<data.length;i++){
        ServicesList.insertAdjacentHTML('beforeend',`
            <div class='services'>
                <h4>${data[i].name}</h4>
                <p>${data[i].description}</p>
            </div>
        `)
    }
}

//Obtain Menu and Display
fetchServices();




