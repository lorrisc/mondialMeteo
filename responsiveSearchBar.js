let iconSearch = document.querySelector("#searchIcon")
let statusSearch = 0
iconSearch.addEventListener("click", () => {
    let searchBar = document.querySelector("#searchBar");
    if (statusSearch == 0) {
        searchBar.style.display = "block";
        statusSearch = 1
    }
    else if (statusSearch == 1) {
        searchBar.style.display = "none";
        statusSearch = 0;
    }
})