"use strict";

// const url = "https://official-joke-api.appspot.com/random_joke"

// fetch(url)
// .then(response => response.json())
// .then(data => {

//     // console.log(data);
//     console.log(data.id)
//     console.log(data.setup);
//     console.log(data.punchline);

    
// })
// .catch(function(err) {
//     console.log("egwerg")
//     console.log(err);
// })
// .finally(function(){});

//async/await option for the sdame as above
// async function getjoke() {
//     let ourFetch = await fetch("https://official-joke-api.appspot.com/random_joke");
//     let data = await ourFetch.json();

//     document.querySelector(".setup").innerText = data.setup;
//     document.querySelector(".punchline").innerText = data.punchline;
// }

// const getJoke2 = async () => {
//     let ourFetch = await fetch("https://official-joke-api.appspot.com/random_joke");
//     let data = await ourFetch.json();

//     let p = document.createElement('p');
//     p.innerText = data.setup;

//     // data.punchline;
// }

// const getJoke3 = async () => {
//     let fetchIt = await fetch("https://official-joke-api.appspot.com/random_joke");
//     let results = await fetchIt.json();
//     console.log(results)
//     console.log(results.setup)
//     console.log(results.punchline)
// }
// getjoke();
// // getJoke2();
// getJoke3();

let link = fetch("https://www.reddit.com/r/aww/.json");

const getReddit = async () => {
    let fetchIt = await link;
    let data = await fetchIt.json();
    
    let postArray = data.data.children;
    // console.log(postArray);
    

    for (let i = 0; i <= 9; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add(`single-post-${i}`);
        newDiv.classList.add("new-post");
        document.querySelector("#post-container").append(newDiv)
        // document.getElementById("post-container").innerHTML + newDiv;

        let subHead = document.createElement("h2");
        subHead.innerText = postArray[i].data.title;
        // console.log(subHead)
        document.querySelector(`.single-post-${i}`).append(subHead);
        
        let thumb = document.createElement("img");
        thumb.setAttribute("src", postArray[i].data.thumbnail)
        // console.log(thumb)
        document.querySelector(`.single-post-${i}`).append(thumb);
        
        let link = document.createElement("a");
        link.innerText = postArray[i].data.url;
        link.setAttribute("href", postArray[i].data.url);
        // console.log(link)
        document.querySelector(`.single-post-${i}`).append(link);       
    };
};
getReddit();
