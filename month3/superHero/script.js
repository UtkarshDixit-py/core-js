// {
//     "id": "69",
//     "name": "Batman",
//     "powerstats": {
//         "intelligence": "81",
//         "strength": "40",
//         "speed": "29",
//         "durability": "55",
//         "power": "63",
//         "combat": "90"
//     },
//     "biography": {
//         "full-name": "Terry McGinnis",
//         "alter-egos": "No alter egos found.",
//         "aliases": [
//             "Batman II",
//             "The Tomorrow Knight",
//             "The second Dark Knight",
//             "The Dark Knight of Tomorrow",
//             "Batman Beyond"
//         ],
//         "place-of-birth": "Gotham City, 25th Century",
//         "first-appearance": "Batman Beyond #1",
//         "publisher": "DC Comics",
//         "alignment": "good"
//     },
//     "appearance": {
//         "gender": "Male",
//         "race": "Human",
//         "height": [
//             "5'10",
//             "178 cm"
//         ],
//         "weight": [
//             "170 lb",
//             "77 kg"
//         ],
//         "eye-color": "Blue",
//         "hair-color": "Black"
//     },
//     "work": {
//         "occupation": "-",
//         "base": "21st Century Gotham City"
//     },
//     "connections": {
//         "group-affiliation": "Batman Family, Justice League Unlimited",
//         "relatives": "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
//     },
//     "image": {
//         "url": "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
//     }
// },



let searchBar = document.getElementById('search');
let nameList = document.getElementById('list');
let listItem = document.getElementById("listItem")

searchBar.onkeyup = function(){
    var searchText = searchBar.value;

    if(searchText !==''){
        fetch(`https://superheroapi.com/api.php/3010324209113532/search/${searchText}`)
            .then((res)=>res.json())
            .then((data)=>{
                showData(data)
            })
            .catch(err=>console.log(err))
    }
}

function showData(data){
    nameList.innerHTML = "";
    console.log(data)
    for(let i = 0 ; i < data.results.length && i < 10;i++){

        // listItem.innerHTML = `nameList.innerHTML +<li>${data.results[i].name}</li>`
        // nameList.appendChild(listItem)
        console.log(data.results[i].name);
        nameList.innerHTML = nameList.innerHTML + 
        `<li id="listItem">
        <h2>${data.results[i].name}</h2>
        <h3>powerstats</h3>
        <b>Speed</b>
        <p>${data.results[i].powerstats.speed}</p>
        <b>Power</b>
        <p>${data.results[i].powerstats.power}</p>
        <b>Durabilty</b>
        <p>${data.results[i].powerstats.durability}</p>

        <button>Add To favourites</button>
        </li>`
    }
   
}