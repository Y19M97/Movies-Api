$('body').css('overflow' , 'auto')
let Tv;

async function getTv(){
let res= await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=d903bcdae97d41411a8e54f49fb3b5d0`)
let finalRes = await res.json()
// console.log(finalRes.results);
Tv = finalRes.results
console.log(Tv);
displayTv()
}
getTv()



function displayTv(){
    let container= ``
    for( let i=0 ; i<Tv.length; i++){
        container+= `
        <div class="col-md-4">
        <div class="movie position-relative shadow-lg rounded mt-5">
            <div class="rate position-absolute end-0">
                <span>${Tv[i].vote_average}</span>
            </div>
            <img class=" card-img-top w-100" src="https://image.tmdb.org/t/p/w500/${Tv[i].poster_path}" alt="">
            <div class="caption text-center card-footer">
                <h4>${Tv[i].name}</h4>
                <p class="text-muted">${Tv[i].overview.split(' ').splice(0,15).join(' ')}</p>
            </div>
        </div>
    </div>`
    }
    document.getElementById('showTv').innerHTML=container
}