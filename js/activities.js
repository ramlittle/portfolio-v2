//Sub Routines
function obtainRecords(searchQuery) {
    fetch('/data/activities.json')
        .then(res => res.json())
        .then(data => {
            const filteredData = data.filter(obj => obj.title.toLowerCase().includes(searchQuery.toLowerCase()));
            displayRecords(filteredData);
        })
}

function displayRecords(data) {
    const heroSection = document.querySelector('#hero-section');
    const heroSectionElements = heroSection.children;
    const recordCountSpan = document.querySelector('.record-count-span')
    const recordsContainer = document.querySelector('#records-container');
    const count = data.length;

    recordsContainer.innerHTML = '';
    if (!data.length) {
        return recordsContainer.insertAdjacentHTML('beforeend', `
            <div style="width:100%;">
                <span>No Record Found</span>
            </div
        `)
    }

    //display records here
    for (let i = 0; i < data.length; i++) {
        const imgLink = data[i].image_url;
        recordsContainer.insertAdjacentHTML('beforeend', `           
            <div>
                <img src="${imgLink}" class="image-modal" data-src="${imgLink}"/>
                <h3>${data[i].title}</h3>
                <h4>${data[i].date}</h4>
                <h4>${data[i].description}</h4>             
            </div>
        `)
    }

    //display record count
    if (recordCountSpan) {
        recordCountSpan.remove();
    }
    //insert the record counter after input search element
    heroSectionElements[3].insertAdjacentHTML('beforebegin', `
            <span class="record-count-span"
                style="color:white;font-size: small;padding:5px;">
                Showing ${count} record(s)
            </span>
            `);

    // Get all images with class image-modal
    const images = document.querySelectorAll('.image-modal');

    // Add event listener to each image
    images.forEach((img) => {
        img.addEventListener('click', () => {
            const imgSrc = img.dataset.src;
            const modalHTML = `
      <div class="modal">
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <img src="${imgSrc}" />
        </div>
      </div>
    `;
            document.getElementById('modal-container').innerHTML = modalHTML;

            // Add event listener to close button
            const closeBtn = document.querySelector('.close-btn');
            closeBtn.addEventListener('click', () => {
                document.getElementById('modal-container').innerHTML = '';
            });
        });
    });

}

function searchRecord(searchQuery) {
    obtainRecords(searchQuery);
}

//Main Routine
obtainRecords('');




