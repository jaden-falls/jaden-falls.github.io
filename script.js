window.onload = () => {
    const searchBar = document.getElementById('searchBar');
    searchBar.focus();

    searchBar.addEventListener('keyup', (event) => {
        let searchText = searchBar.value;
        if (event.key === 'Enter') {
            if (searchText === 'youtube') {
                window.location.href = "https://youtube.com";
            }else if (searchText === 'reddit') {
                window.location.href = "https://reddit.com";
            }else {
                window.location.href = `https://duckduckgo.com/?q=${searchText}&va=b&t=hc&ia=web`;
            }
        }
    })
}
