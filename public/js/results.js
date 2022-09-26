

async function receiveData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function serScores() {
    const scores = await getResults('http://localhost/3000/api');
}