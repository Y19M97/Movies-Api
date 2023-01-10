$('body').css('overflow' , 'auto')
let Api;

async function getApi(){
let res= await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d903bcdae97d41411a8e54f49fb3b5d0`)
let finalRes = await res.json()
// console.log(finalRes.results);
Api = finalRes.results
console.log(Api);
displayMovies()
}
getApi()



function displayMovies(){
    let container= ``
    for( let i=0 ; i<Api.length; i++){
        container+= `
        <div class="col-md-4">
        <div class="movie position-relative shadow-lg rounded mt-5">
            <div class="rate position-absolute end-0">
                <span>${Api[i].vote_average}</span>
            </div>
            <img class=" card-img-top w-100" src="https://image.tmdb.org/t/p/w500/${Api[i].poster_path}" alt="">
            <div class="caption text-center card-footer">
                <h4>${Api[i].title}</h4>
                <p class="text-muted">${Api[i].overview.split(' ').splice(0,15).join(' ')}</p>
            </div>
        </div>
    </div>`
    }
    document.getElementById('showData').innerHTML=container
}