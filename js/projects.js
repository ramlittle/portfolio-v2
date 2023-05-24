const ProjectsList = document.querySelector('.projects-list');

function fetchProjects(){
    fetch('../data/projects.json')
    .then(res=>res.json())
    .then(data=>{
       displayProjects(data);
    })
}

function displayProjects(data){
    if(!data.length){
        return ProjectsList.insertAdjacentHTML('beforeend',`
            <span>No Projects Found</span>
        `)
    }
    //display work exp list here
    for(let i=0;i<data.length;i++){
        ProjectsList.insertAdjacentHTML('beforeend',`
            <div class='projects'>
                <h4>${data[i].title}</h4>
                <p>${data[i].description}</p>
                <p>${data[i].technologies.length}</p>
            </div>
        `)
        
    }
}

//Obtain Menu and Display
fetchProjects();




