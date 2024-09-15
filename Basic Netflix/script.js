let movies = [
    {
        name:"Moster Hause",
        poster:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61da8438155793.57575971afe13.jpg",
        rating : 5.4,
        video: "https://www.youtube.com/embed/LNLJz0pOpRQ?si=9xGtL6FX1vTFmvxg&autoplay=1&mute=1",
        director: "Robert Zemeckis and Steven Spielberg"
    },

    {
        name : "Justice League",
        poster:"https://th.bing.com/th/id/OIP._HQZesg_3XXMq2wLegBn5gHaK-?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating : 8.5,
        video: "https://www.youtube.com/embed/3cxixDgHUYw?si=dvZcQCS-gN77rWT4&autoplay=1&mute=1",
        director: "Joss Whedon"
    },

    {
        name : "Aladdin",
        poster:"https://th.bing.com/th?id=OIP.geZ8Bk8rtvwneC1dhdxg9QHaK4&w=206&h=303&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        rating : 7.7,
        video: "https://www.youtube.com/embed/_ugDhYnz7gc?si=AU5ZTbQ2U8gk9tOK&autoplay=1&mute=1",
        director: "Guy Ritchie"
    },

    {
        name : "Titanic",
        poster:"https://th.bing.com/th/id/OIP.3YspgclFK57Onq-mYLQt9AHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating : 9.8,
        video: "https://www.youtube.com/embed/njhy54_umT4?si=UQDfy1tgo8j5JXyX&autoplay=1&mute=1",
        director: "James Cameron"
    },


    {
        name : "Battleship",
        poster:"https://th.bing.com/th/id/OIP.fS7drXelAzXScI8AZCpW0QHaKX?w=207&h=289&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating : 8.9,
        video: "https://www.youtube.com/embed/gaRZ7Ii08F8?si=KHrUrH1sVG9r5CDq&autoplay=1&mute=1",
        director: "Peter Berg"
    },

    
    {
        name : "Chennai Express",
        poster:"https://th.bing.com/th/id/OIP.srnf5DuiIudv7eus9z3cMQHaJ4?w=182&h=243&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating : 9.9,
        video: "https://www.youtube.com/embed/cYXH12YFHTE?si=3nDlN8_-VhGqAsBW&autoplay=1&mute=1",
        director: "Rohit Shetty"
    },

    {
        name : "Tanhaji",
        poster:"https://th.bing.com/th/id/OIP.YDfMdNC5gIyxSwwbMm1OOgHaJ4?w=182&h=242&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating : 10,
        video: "https://www.youtube.com/embed/RjKW6HupHtE?si=HNt_ZizCxd8qC2BC&autoplay=1&mute=1",
        director: "Om Raut"
    },

    {
        name : "Dhadak",
        poster:"https://th.bing.com/th/id/OIP._poN_gGpVhkPlYJ6SFPekgHaJ8?w=182&h=245&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        rating : 8.5,
        video: "https://www.youtube.com/embed/tXP61mjK9Bg?si=-Rsf5g43dGsHq1U4&autoplay=1&mute=1",
        director: "Shashank Khaitan"
    }
];

function searchMovie(){
    let movieName = document.getElementById('search').value;
    
    if (movieName!==""){

        let result = movies.filter(function(movie){
            return movie.name.toUpperCase().includes(movieName.toUpperCase());
        })
        displayMovie(result);
    }
    else{
        displayMovie(movies);
    }
}


function displayMovie(data){
    document.getElementById('movies').innerHTML="";
    let htmlstring=``;
    for(let i=0; i<data.length;i++){
        htmlstring=htmlstring+`
            <div class="movie">
                <div class="overlay">
                    <div class="videos">
                        <iframe class="video" width="560" height="315" src="${data[i].video}" title="YouTube video player" frameborder="0" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>

                    </div>
                    <div class="details">
                        <h1>${data[i].name}</h1>
                        <h2>⁕ ${data[i].rating}</h2>
                        <p>${data[i].director}</p>
                    </div>
                </div>
                <img class="poster" src="${data[i].poster}" alt="">
            </div>
        `
    }

    document.getElementById('movies').innerHTML = htmlstring;
}

displayMovie(movies);

    // let movieDiv = document.createElement("div");
    // movieDiv.classList.add("movie");

    // let overlayDiv = document.createElement("div");
    // overlayDiv.classList.add("overlay");

    // movieDiv.appendChild(overlayDiv);