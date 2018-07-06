const API_KEY='&apiKey=bf8331dc9a0843188e542692b281dcb9'
const TOP_HL='top-headlines?'
const COUNTRY='country=us'
const API_URL='https://newsapi.org/v2/'
const EVERYTHING='everything?'
const TOP_HEADLINES = `${API_URL}${TOP_HL}${COUNTRY}${API_KEY}`
function getHeadlines() {
    console.log(API_URL);

    return (
        fetch(TOP_HEADLINES)
            .then(response => response.json())
    )
}

function queryHeadlines(query) {
    return (
        fetch(`${API_URL}${EVERYTHING}q=${query}${API_KEY}`)
            .then(response => response.json())    
    )
}

export default {
    getHeadlines,
    queryHeadlines,
}
