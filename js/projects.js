const Projects = document.querySelector('.projects');

function fetchProjects(){
    fetch('../data/projects.json')
    .then(res=>res.json())
    .then(data=>{
       displayProjects(data);
    })
}

function displayProjects(data){
    if(!data.length){
        return Projects.insertAdjacentHTML('beforeend',`
            <span>No Projects Found</span>
        `)
    }
    //display work exp list here
    for(let i=0;i<data.length;i++){
        Projects.innerHTML +=`
            <div class = 'project-info'>
                <h4>${data[i].title}</h4>
                <p>${data[i].description}</p>
                <div class='languages'></div>
            </div>
        `
        Projects.innerHTML += `
            <div class='project-sample'>
                <img src='${data[i].imageLink}'/>
                <div>
                    <a href = '${data[i].link}' target='_blank'>Visit</a>
                    <a href = '${data[i].sourceCode}' target='_blank'>Code</a>
                </div>
            </div>
        `
    }
    
}


//Obtain Menu and Display
fetchProjects();




