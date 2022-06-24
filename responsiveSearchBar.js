let iconSearch = document.querySelector("#searchIcon")
let closeIcon = document.querySelector("#closeIcon");

let statusSearch = 0
iconSearch.addEventListener("click", () => {
    let searchBar = document.querySelector("#searchBar");
        // searchBar.style.display = "block";
        searchBar.style.visibility = "visible";
        searchBar.style.width = "75vw";

        let firstBarre = document.querySelector("#firstBarre");
        let secondBarre = document.querySelector("#secondBarre");

        iconSearch.style.right="-20px";

        setTimeout(() => {  closeIcon.style.visibility="visible"; }, 100);
        

        firstBarre.style.transform="rotate(45deg)";
        secondBarre.style.transform="rotate(-45deg)";

})
closeIcon.addEventListener("click", () => {
        searchBar.style.width = "0vw";
        searchBar.style.visibility = "hidden";

        let firstBarre = document.querySelector("#firstBarre");
        let secondBarre = document.querySelector("#secondBarre");

        
        firstBarre.style.transform="rotate(0deg)";
        secondBarre.style.transform="rotate(0deg)";
        
        closeIcon.style.visibility="hidden";
                
        setTimeout(() => {  iconSearch.style.right="20px"; }, 200);
        

})