const artistContainer = document.querySelector('#myUL')
const starBtn = document.querySelector('#starBtn')
const favsContainer = document.querySelector('#favsUL')

const baseURL = 'http://localhost:2400'

function createArtistCard(artist) {
    let artistCard = document.createElement('li')
    artistCard.innerHTML = `<p>${artist.name}</p>  <button class="faveStar" id="${artist.artist_id}"> <img id="starBtn" src="https://img.icons8.com/ios/20/000000/star--v1.png"/> </button>`

    artistContainer.appendChild(artistCard)
    
    document.getElementById(`${artist.artist_id}`).addEventListener('click',makeFavorite)
}

const getAllArtists = () => {
    axios.get(`${baseURL}/artists`)
        .then ((response) => {
        for (let i = 0; i < response.data.length; i ++) {
            createArtistCard(response.data[i])
        }
    })
    .catch (error => console.log(error))
}

const getUserFavs = () => {
    axios.get(`${baseURL}/users?username=${window.localStorage.getItem('username')}`)
        .then(res => {
            for(let i = 0; i< res.data.length; i++) {
                const favCard = document.createElement('li')
                favCard.innerHTML = `<p>${res.data[i].name}</p>`
                favsContainer.appendChild(favCard)
            }
        })
    .catch(error => console.log(error))
}

function makeFavorite () {
    // console.log(this.id)
    let id = this.id

    axios.put(`${baseURL}/artists`, {id})
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
}

getAllArtists()
getUserFavs()