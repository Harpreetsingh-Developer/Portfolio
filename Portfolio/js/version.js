function getVersionOfPortfolio() {
    fetch(``)
        .then((response) => {
            return response.json();
        })
        .then((release) => {
            document.getElementById(
                'version',
            ).innerHTML = `- <a href="${release.html_url}" target="_blank" rel="noopener">${release.tag_name}</a>`;
        });
}
getVersionOfPortfolio();