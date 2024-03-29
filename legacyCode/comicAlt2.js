// code stolen from tracheotomy, by juneyblues
// additonal code help from FlaringK, who helped write that code
// this document contains code for: page numbers and page rendering
function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
        tmp = [];
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
// this code handles page numbers
let pageNum = String(findGetParameter("pg"));
    currentPage = Number(pageNum);
/*
nextPage = currentPage + 1;
prevPage = currentPage - 1;
*/
//prevPage = `${pageList[pageList.findIndex(pageNum)].prevPage}`;

// sets up next and prev page in a way that handles both numeric and non numeric page numbers


// this function determins what the page selection text is linked to
function setPageLinks(pp, np) {
    let nextPage = document.querySelector(".nextpage")
    let prevPage = document.querySelector(".prevpage")

    nextPage.href = "?pg=" + (np)
    prevPage.href = "?pg=" + (pp)

    if (pp < 0) { prevPage.style.display = "none" }
    else { prevPage.style.display = "unset" }

    if (np >= pageList.length) { nextPage.style.display = "none" }
    else { nextPage.style.display = "unset" }
}

// this code puts those links in

setPageLinks(prevPage, nextPage);
document.querySelector(".nextpage").addEventListener("click", goToPage)
document.querySelector(".prevpage").addEventListener("click", goToPage)

// this code turns the page
function goToPage(event) {
    event.preventDefault()
    history.pushState(null, '', this.href);

    let linkedPage = parseInt(this.href.split("=")[1])
    currentPage = linkedPage

    
    // Set new links for page arrows
    setPageLinks(prevPage, nextPage)

    //clears the content
    pageContent = "";
    // Set new content
    document.getElementById("pageContent").innerHTML = `${pageList[currentPage].content}`;
    //get new theme
    document.body.className = pageList[currentPage].theme
    // Scroll Up 
    window.scrollTo(0, 0);
}




// this code grabs page media and text for display
// by using the pageContent id, it loads whatever html was in that page's
document.getElementById("pageContent").innerHTML = `${pageList[currentPage].content}`;