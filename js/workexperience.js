const WorkExperienceList = document.querySelector('.work-experience-list');

function fetchWorkExperience(){
    fetch('../data/workexperience.json')
    .then(res=>res.json())
    .then(data=>{
       displayWorkExperience(data);
    })
}

function displayWorkExperience(data){
    if(!data.length){
        return WorkExperienceList.insertAdjacentHTML('beforeend',`
            <span>No Work Experience Found</span>
        `)
    }
    //display work exp list here
    for(let i=0;i<data.length;i++){
        WorkExperienceList.insertAdjacentHTML('beforeend',`
            <div class='job'>
                <h4>${data[i].job}</h4>
                <h5>${data[i].company}</h5>
                <p>${data[i].description}</p>
                <p>${data[i].employmentStatus}</p>
            </div>
        `)
    }
}

//Obtain Menu and Display
fetchWorkExperience();




