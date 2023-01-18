// checks what html file we are in, code yoinked from stackoverflow
// gets the exact file name
var currentPageText = location.href.split("/").slice(-1).toString(0);  
// removes .html from the end
currentPageNum = currentPageText.replace(".html", "");
// grabs the index with that name
currentPageId = pageOrder.indexOf(currentPageNum);
/* currently unsed variables, used as example, if uncocomented will break everything
//prevPageNum = pageOrder[pageOrder.findIndex(currentPageNum) - 1];
//nextPageNum = pageOrder[pageOrder.findIndex(currentPageNum) + 1];
*/
//takes page order, looks for the page before and page after the current page in this one
function setPageLinks (pageOrder, currentPage){
    let nextPage = document.querySelector(".nextPage")
    let prevPage = document.querySelector(".prevPage")
    let firstPage = document.querySelector(".firstPage")

    prevPage.href = pageOrder[currentPage - 1] + ".html";
    nextPage.href = pageOrder[currentPage + 1] + ".html";
    firstPage.href = pageOrder[0] + ".html";
    //hides prevPage button when there isnt any
    if (currentPage - 1 < 0) { 
        prevPage.style.display = "none"
    } else {
         prevPage.style.display = "unset"
    }
    //hides nextPage button when there isnt any
    if (currentPage + 1 >= pageOrder.length) {
        nextPage.style.display = "none"
    } else {
        nextPage.style.display = "unset"
    }
    console.log("get this.this'd");
    console.log("the current page is:" + currentPage);
}

setPageLinks (pageOrder, currentPageId)

console.log(currentPageNum)
console.log(currentPageId)
console.log()

// changes what page ur on when you click it (and maybe also when you press the arrow keys)
document.querySelector(".nextPage").addEventListener("click", goToPage)
document.querySelector(".nextPage").addEventListener("keyright", goToPage)
document.querySelector(".prevPage").addEventListener("click", goToPage)
document.querySelector(".prevPage").addEventListener("keyleft", goToPage)
document.querySelector(".firstPage").addEventListener("click", goToPage)

