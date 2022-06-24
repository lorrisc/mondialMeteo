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

        iconSearch.style.right="-25px";

        setTimeout(() => {  closeIcon.style.visibility="visible"; }, 100);
        
        
        firstBarre.style.transform="rotate(45deg)";
        secondBarre.style.transform="rotate(-45deg)";
        setTimeout(() => {  iconSearch.style.display="none"; }, 100);

})
closeIcon.addEventListener("click", () => {
        searchBar.style.width = "0vw";
        searchBar.style.visibility = "hidden";

        let firstBarre = document.querySelector("#firstBarre");
        let secondBarre = document.querySelector("#secondBarre");

        iconSearch.style.display="block";
        firstBarre.style.transform="rotate(0deg)";
        secondBarre.style.transform="rotate(0deg)";
        
        closeIcon.style.visibility="hidden";
                
        setTimeout(() => {  iconSearch.style.right="25px"; }, 200);
        

})