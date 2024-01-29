const API_KEY = "RkA4h1Av6UDySxBVGJkdoRaxDFs";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok){
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    let heading = "API Key Status";
    let results = `<div> Your key is valid until:</div>`;
    results += `<div class="key-status"> ${data.expiry}</div>`;
    
    let resultsModalTitle = document.getElementById("resultsModalTitle");
    let resultsModalContent = document.getElementById("results-content");

    resultsModalTitle.innerText = heading;
    resultsModalContent.innerHTML = results;

    resultsModal.show();
}