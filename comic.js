// code stolen from tracheotomy

// this document contains code for: page numbers and page content. it may also contain the render code, we will see

// this code handles page numbers
let currentPage = Number(findGetParameter("pg"));

nextPage = currentPage + 1;
prevPage = currentPage - 1;

// this code grabs page media and text for display

    // this code makes a page content object with html code from the current page's page data file
document.getElementById("pageContent").innerHTML = '${pageData/[currentPage]}.content';
// $pageData/[currentPage] migght not point to a file in a folder