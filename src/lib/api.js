const API_KEY='apiKey=bf8331dc9a0843188e542692b281dcb9'
const TOP_HL='top-headlines?'
const COUNTRY='country=us&'
const API_URL=`https://newsapi.org/v2/${TOP_HL}${COUNTRY}${API_KEY}`

function getHeadlines() {
    console.log(API_URL);

    return (
        fetch(API_URL)
            .then(response => response.json())
    )
}

export default {
    getHeadlines,
}
