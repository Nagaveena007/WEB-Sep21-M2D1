// MANDATORY JS EXERCISES (create a different file for this exercise)
//     1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

let genres=["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]


//     2) Create an unordered list using JavaScript and save it in a variable
let test=document.createElement('section');
test.setAttribute('id','test');
let ul=document.createElement('ul');
document.body.appendChild(test);
test.appendChild(ul);
for (let i=0; i<array.length; i++){
    let li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML=li.innerHTML + array[i];
}
//     3) Cycle the array and create a list-item via JavaScript for every element

//     4) Insert the genere as text in the list-item
//     5) Append the list items in the unordered list
//     6) Append the unordered list in the document. The list should appear in the page.

/*
I was raised around many types of music, and I have heard many different songs. 
I love the music that they make because it is real and alive. I look for all kinds of songs.
I love ed shereen, justin beiber, rebecca black, annie marei songs and also I love the songs in my mother toung which is Kannada language
melodious songs, Folk songs, etc

I don't like the rap songs.
*/




window.onload = function () {
    addToggleButtons()    
    countAlbums()
}

function addToggleButtons() {
    for (let section of document.querySelectorAll("section")) {
        section.children[0].classList.add("collapse")
        section.children[0].classList.add("show")
        section.innerHTML = `
            <button class='btn btn-outline-light toggle-btn' data-bs-toggle="collapse" data-bs-target="#${section.id} > div">
                Show/hide section
            </button>
        ` + section.innerHTML 
    }
}


function countAlbums() {
    const albumN = document.querySelectorAll("img").length - 3
    
    
    const span = document.createElement("span")
    
    span.classList.add("text-center")
    span.classList.add("d-inline-block")
    span.classList.add("w-100")
    span.classList.add("my-4")
    
    span.innerHTML = "P.S. This page contains " + albumN + " albums!"
    
    document.querySelector("footer").appendChild(span)
}
