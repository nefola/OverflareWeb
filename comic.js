// code stolen from tracheotomy
// additonal code help from FlaringK, who helped write that code
// this document contains code for: page numbers and page content. it may also contain the render code, we will see
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
let currentPage = Number(findGetParameter("pg"));

nextPage = currentPage + 1;
prevPage = currentPage - 1;



// this code grabs page media and text for display

// currerntly pagelist isnt defined
document.getElementById("pageContent").innerHTML = `${pageList[currentPage].content}`;