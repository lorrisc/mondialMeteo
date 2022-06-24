let iconSearch = document.querySelector("#searchIcon")
let closeIcon = document.querySelector("#closeIcon");
iconSearch.style.zIndex="100";


iconSearch.addEventListener("click", () => {
        let searchBar = document.querySelector("#searchBar");
        searchBar.style.visibility = "visible";
        searchBar.style.width = "75vw";

        let firstBarre = document.querySelector("#firstBarre");
        let secondBarre = document.querySelector("#secondBarre");
        firstBarre.style.zIndex="100";
        secondBarre.style.zIndex="100";

        iconSearch.style.right = "-25px";

        if (window.location.href.includes('index.html')) {

                setTimeout(() => { closeIcon.style.visibility = "visible"; }, 100);

                firstBarre.style.transform = "rotate(45deg)";
                secondBarre.style.transform = "rotate(-45deg)";
                setTimeout(() => { iconSearch.style.display = "none"; }, 100);
        }
        else {
                bgForSearch.style.opacity="90%"
                searchBar.style.position = "absolute";
                searchBar.style.top = "80px";
                searchBar.style.left = "20px";


                closeIcon.style.visibility = "visible";

                firstBarre.style.transform = "rotate(45deg)";
                secondBarre.style.transform = "rotate(-45deg)";

                firstBarre.style.top = "100px";
                secondBarre.style.top = "100px";


                let searchBarResult = document.querySelector("#resultatSearch");
                searchBarResult.style.top = "130px";
                searchBarResult.style.left = "20px";

        }




})
closeIcon.addEventListener("click", () => {
        
        searchBar.style.width = "0vw";
        searchBar.style.visibility = "hidden";
        
        let firstBarre = document.querySelector("#firstBarre");
        let secondBarre = document.querySelector("#secondBarre");
        
        iconSearch.style.display = "block";
        firstBarre.style.transform = "rotate(0deg)";
        secondBarre.style.transform = "rotate(0deg)";
        
        closeIcon.style.visibility = "hidden";
        
        setTimeout(() => { iconSearch.style.right = "25px"; }, 200);
        
        bgForSearch.style.opacity="0%"


})