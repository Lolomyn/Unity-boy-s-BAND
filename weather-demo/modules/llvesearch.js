/* City search hint */

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search city.list.json
const searchCities = async searchText => {
    const res = await fetch('../city.list.json');
    const cities = await res.json();

    // Get matches to current text input
    let matches = cities.filter(city => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return city.name.match(regex) || city.country.match(regex)
    });
    
    if (searchText.length < 3) {
        matches = [];
    }

    outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
    if (matches.length > 3) {
        const html = matches.map(match => `
            <div class="card card-body mb-1">
                <option class="search">${match.name}</h4>
            </div>
        `).join('');
        matchList.innerHTML = html;
    }
}
search.addEventListener('input', () => searchCities(search.value));