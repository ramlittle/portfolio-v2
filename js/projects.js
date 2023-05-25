const ProjectsList = document.querySelector('.projects-list');
const ShowMoreButton=document.querySelector('#show-more-button');
const ShowLessButton=document.querySelector('#show-less-button');

let dataCount;
let counter;
let divisor = 2;
let initialData=[];

function fetchProjects(){
    fetch('../data/projects.json')
    .then(res=>res.json())
    .then(data=>{
        dataCount=data.length;
        initialData=data;
       displayProjects(data,divisor); 
    })
}

function displayProjects(data,divisor){
    // deductCounter(data);
    if(!data.length){
        return ProjectsList.insertAdjacentHTML('beforeend',`
            <span>No Projects Found</span>
        `)
    }
    //display work exp list here
    for(let i=0;i<data.length/divisor;i++){
        ProjectsList.insertAdjacentHTML('beforeend',`
            <div class='projects'>
                <div id ='set'class ='project-info'>
                    <h4>${data[i].title}</h4>
                    <p>${data[i].description}</p>
                    <div class='project-links'>
                        <a href='${data[i].link}' target='_blank'>View Page</a>
                        <a href='${data[i].sourceCode}' target='_blank'>View Code</a>
                    </div>
                </div>
                <div class='project-sample'>
                    <img src='${data[i].imageLink}'/>
                </div>
            </div>
        `)
    }
}

function insertTechnologies(){
    const ProjectInfo = ProjectsList.querySelectorAll('*')
    console.log('ProjectInfo count test',ProjectInfo)
    // still unable to display the technologies list inside project info section
}

ShowMoreButton.addEventListener('click',()=>{
    ProjectsList.innerHTML='';
    divisor -= 1;
    displayProjects(initialData,divisor)
    ShowMoreButton.style.display ='none';
    ShowLessButton.style.display ='inline'
})

ShowLessButton.addEventListener('click',()=>{
    ProjectsList.innerHTML='';
    divisor+=1;
    displayProjects(initialData,divisor)
    ShowMoreButton.style.display ='inline';
    ShowLessButton.style.display='none';
})

function routine(){
    fetchProjects();
    insertTechnologies();
}
routine();





