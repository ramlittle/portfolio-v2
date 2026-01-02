const ActivitiesContainer = document.querySelector('.activities-container');

function fetchRecords() {
    fetch('../data/activities.json')
        .then(res => res.json())
        .then(data => {
            displayRecords(data);
        })
}

function displayRecords(data) {
    if (!data.length) {
        return ActivitiesContainer.insertAdjacentHTML('beforeend', `
            <span>No Technologies Found</span>
        `)
    }
    //display records here
    for (let i = 0; i < data.length; i++) {
        ActivitiesContainer.insertAdjacentHTML('beforeend', `            
            <div>
                <h2>${data[i].title}</h2>
                <img src='${data[i].image_url}'/>
                <p>${data[i].date}</p>
                <p>${data[i].description}</p>
             </div>
        `)
    }
}

//Obtain records and Display
fetchRecords();




