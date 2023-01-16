// code stolen from tracheotomy
// additonal code help from FlaringK, who helped write that code
// this document contains code for: page numbers and page content. it may also contain the render code, we will see

// this code handles page numbers
let currentPage = Number(findGetParameter("pg"));

nextPage = currentPage + 1;
prevPage = currentPage - 1;

// this code grabs page media and text for display

document.getElementById("pageContent").innerHTML = `${pageList[currentPage].content}`;