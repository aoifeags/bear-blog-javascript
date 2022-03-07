darkModeButton = document.getElementById("dark-mode-button")

handleDarkModeButtonClick = function () {
    console.log("dark mode button clicked")
    // change the background colour and text
    body = document.body
//    body.style.backgroundColor = "#091d1e"
    body.classList.toggle("dark-mode");

    title = document.getElementById("title-section")
    console.log(title);
    // IMPORTANT - the id will override class so on line 19, the class will not apply. 
    // so in this case we must directly modify the property as below
    // title.style.border = "1px solid #aaaaaa"
    // body.style.color = "#aaaaaa"

    // change the border of the title
 //commenting this out made the border round the bear photo stay black in dark mode 
    title.classList.toggle("dark-title-borders");
    console.log("aftertoggle", title);
    // change the border and headings on the posts
//commenting this out made the borders round the posts stay black in dark mode 
    posts = document.getElementsByClassName("post")
    for (post of posts){
        post.classList.toggle("dark-post-borders");
    }
// commenting this out made post 1, 2 and 3 have the same styling as the others
    // postHeadings = document.getElementsByTagName("h3")
    // for (heading of postHeadings){
    //     heading.style.color = "#466876"
    // }
}

darkModeButton.addEventListener("click", handleDarkModeButtonClick)


favouriteButtons = document.getElementsByClassName("favourite-button");
//const favouritesList = [];

handleFavouriteButtonClick = function () {
    console.log("favourite button clicked")
 //   favouritesList.push()
    for (eachButton of favouriteButtons){
        if (eachButton.innerText=="Favourite this post"){
            eachButton.innerText = "Favourited"
            break;
        }
        else {
        eachButton.value = "Favourited"
        // eachButton.innerText = "my text";
        } 
    }
 
}

for (eachButton of favouriteButtons){
    eachButton.addEventListener("click", handleFavouriteButtonClick);
}
