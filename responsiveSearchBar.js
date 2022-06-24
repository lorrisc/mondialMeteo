let iconSearch = document.querySelector("#searchIcon")
let closeIcon = document.querySelector("#closeIcon");
iconSearch.style.zIndex = "100";

let bgForSearch = document.querySelector("#bgForSearch");

iconSearch.addEventListener("click", () => {
        //*search bar
        let searchBar = document.querySelector("#searchBar");
        searchBar.style.visibility = "visible";
        searchBar.style.width = "75vw";

        //*icon close search bar
        let firstBarre = document.querySelector("#firstBarre");
        let secondBarre = document.querySelector("#secondBarre");
        firstBarre.style.zIndex = "100";
        secondBarre.style.zIndex = "100";

        iconSearch.style.right = "-25px";//*icone recherche transition

        if (window.location.href.includes('index.html')) {//*si page principal

                setTimeout(() => { closeIcon.style.visibility = "visible"; }, 100);

                firstBarre.style.transform = "rotate(45deg)";
                secondBarre.style.transform = "rotate(-45deg)";
                setTimeout(() => { iconSearch.style.display = "none"; }, 100);
        }
        else {//*si page résultat
                //*background
                bgForSearch.style.display = "block"
                bgForSearch.style.opacity = "90%"

                //*search bar
                searchBar.style.position = "absolute";
                searchBar.style.top = "80px";
                searchBar.style.left = "20px";

                closeIcon.style.visibility = "visible";

                //*close search bar icon
                firstBarre.style.transform = "rotate(45deg)";
                secondBarre.style.transform = "rotate(-45deg)";

                setTimeout(() => { iconSearch.style.display = "none"; }, 100);

                //*close search bar icon
                firstBarre.style.top = "100px";
                secondBarre.style.top = "100px";

                //*positionnement search bar
                let searchBarResult = document.querySelector("#resultatSearch");
                searchBarResult.style.top = "130px";
                searchBarResult.style.left = "20px";
        }




})

//*Fonction cancel la search bar
function closeSearch() {
        searchBar.style.width = "0vw";
        searchBar.style.visibility = "hidden";

        let firstBarre = document.querySelector("#firstBarre");
        let secondBarre = document.querySelector("#secondBarre");

        iconSearch.style.display = "block";
        firstBarre.style.transform = "rotate(0deg)";
        secondBarre.style.transform = "rotate(0deg)";

        closeIcon.style.visibility = "hidden";

        setTimeout(() => { iconSearch.style.right = "25px"; }, 200);

        if (window.location.href.includes('resultat.html')) {//*si page resultat
                //*reset background
                bgForSearch.style.opacity = "0%";
                setTimeout(() => { bgForSearch.style.display = "none"; }, 600);
        }
}

closeIcon.addEventListener("click", () => {
        closeSearch();
})
bgForSearch.addEventListener("click", () => {
        closeSearch();
})