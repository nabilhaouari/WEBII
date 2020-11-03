let config = null;
async function getConfig(){
    let resp = await fetch('../Json/config.json');
    let data = await resp.json();
    config = data;
}

window.onload = () =>{
    console.log('loaded');
    getConfig();

    async function getData(searchparameter){
        let resp = await fetch(`${config.baseurl}t=${searchparameter}${config.apikey}`);
        let data = await resp.json();  
        return data;
    }
function showMovieOnCard(movie){
    //Dom Manip
    console.log(movie);
    document.getElementById("movie-title").innerText = movie.Title;
document.getElementById("movie-plot").innerText = movie.Plot;
document.getElementById("movie-releasedate").innerText = movie.Released;
document.getElementById("movie-poster").setAttribute("src",movie.Poster);
    //Show card
    document.getElementById('card').style.display="block";
}
    let submitForm = event => {
        event.preventDefault();
        let value = document.getElementById('inputTitle').value;
        //Search for the movie
       getData(value).then(result =>{
           console.log(result);
           showMovieOnCard(result);
               })

    }




    //event Listener for the form
    document.getElementById('searchform').addEventListener('submit',submitForm);
    //hide the card for now
    // document.getElementById('card').style.display="none";
}