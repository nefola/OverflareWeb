// checks what html file we are in, code yoinked from stackoverflow
currentPageNum = location.href.split("/").slice(-1);

// currently unsed variables, used as example
prevPageNum = pageOrder[pageOrder.findIndex(currentPageNum) - 1];
nextPageNum = pageOrder[pageOrder.findIndex(currentPageNum) + 1];

//takes page order, looks for the page before and page after the current page in this one
function setPageLinks (pageOrder, currentPage){
    let nextPage = document.querySelector(".nextPage")
    let prevPage = document.querySelector(".prevPage")
    let firstPage = document.querySelector(".firstPage")

    prevPage.href = pageOrder[pageOrder.findIndex(currentPage) - 1];
    nextPage.href = pageOrder[pageOrder.findIndex(currentPage) + 1];
    firstPage.href = pageOrder[0];
    //hides prevPage button when there isnt any
    if (pageOrder.findIndex(currentPage) - 1 < 0) { 
        prevPage.style.display = "none"
    } else {
         prevPage.style.display = "unset"
    }
    //hides nextPage button when there isnt any
    if (pageOrder.findIndex(currentPage) + 1 > pageOrder.length) {
        nextPage.style.display = "none"
    } else {
        nextPage.style.display = "unset"
    }
}

setPageLinks (pageOrder, currentPageNum)

// changes what page ur on when you click it (and maybe also when you press the arrow keys)
document.querySelector(".nextPage").addEventListener("click", goToPage)
document.querySelector(".nextPage").addEventListener("keyright", goToPage)
document.querySelector(".prevPage").addEventListener("click", goToPage)
document.querySelector(".prevPage").addEventListener("keyleft", goToPage)
document.querySelector(".firstPage").addEventListener("click", goToPage)