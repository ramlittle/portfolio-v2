//Sub Routines
function obtainRecords(searchQuery) {
    fetch('/pages/clients/rog/data/landing_pages.json')
        .then(res => res.json())
        .then(data => {
            const filteredData = data.filter(obj => obj.title.toLowerCase().includes(searchQuery.toLowerCase()));
            displayRecords(filteredData);
        })
}

function displayRecords(data) {
    const heroSection = document.querySelector('#hero-section');
    const recordCountSpan = document.querySelector('.record-count-span')
    const landingPagesContainer = document.querySelector('#landing-pages-container');
    const count = data.length;    

    landingPagesContainer.innerHTML = '';
    if (!data.length) {
        return landingPagesContainer.insertAdjacentHTML('beforeend', `
            <div style="width:100%;">
                <span>No Record Found</span>
            </div
        `)
    }

    //display records here
    for (let i = 0; i < data.length; i++) {
        const imgLink = data[i].imageLink;
        const link = data[i].link;
        landingPagesContainer.insertAdjacentHTML('beforeend', `           
            <div>
                <img src="${imgLink}"/>
                <h3>${data[i].title}</h3>
                <h4>${data[i].description}</h4>
                <a href="${link}" target="_blank">View</a>                
            </div>
        `)
    }

    //display record count
    if(recordCountSpan){
        recordCountSpan.remove();
    }else{
        heroSection.insertAdjacentHTML('beforeend', `
        <span class="record-count-span" style="color:white;">Showing ${count} records</span>`);
    }
    
}

function searchRecord(searchQuery) {
    obtainRecords(searchQuery);
}

//Main Routine
obtainRecords('');




