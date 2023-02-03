// this function generates a named element to be imbeded in the archive page
// chapterString
function chapterDisplay(chapterOrder, chapterTitles, chapterDates, title, elementTitle) {


    // renders the chapter's title with proper styling
    chapterIndexContent = "<a class=chapterTitle>" + title + "</a>";

    // loop that tuns through what to render for each page in the chapter
    for (let pageNum = 0; pageNum < chapterOrder.length ; pageNum++) {
       //chapterIndexContent.concat("<a>test</a>");
        //chapterIndexContent = chapterIndexContent + '</br><a>test</a>' ;

        //renders each page's date
        chapterIndexContent = chapterIndexContent + "</br><a class=date>" + chapterDates[pageNum] + "</a>";
        //renders each page's name
        chapterIndexContent = chapterIndexContent + "<a class=pageNumber>" + chapterTitles[pageNum] + "<a/>"; 
        
        // sets the page links, doesnt work currnetly
        chapterOrder[pageNum].href = pageOrder[pageNum] + ".html";

        console.log("i am in the for loop");
    }
    
    console.log(chapterOrder.length)
    console.log(chapterIndexContent)

    document.getElementById(elementTitle).innerHTML = chapterIndexContent;
}


chapterDisplay(pageOrder, pageDates, pageTitles, "Chapter 1", "chapter1Index")


//this code will be used to set the html code of each archive element 
// after generating a string of html code in an internal variable, the content of the element we are creating gets filled with it
//document.getElementById("nameOfThing").innerHTML = n;