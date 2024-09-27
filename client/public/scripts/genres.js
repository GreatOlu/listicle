const renderGenres = async () => {
    
    const response = await fetch('/genres')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(genre => {
            const card = document.createElement('div')
            card.classList.add('card')

            const name = document.createElement('h3')
            name.textContent = genre.name
            card.appendChild(name)

            const origin = document.createElement('p')
            origin.textContent = 'Origin: ' + genre.origin
            card.appendChild(origin)

            const artists = document.createElement('p')
            artists.textContent = 'Famous Artists: ' + genre.artists
            card.appendChild(artists)

            const songs = document.createElement('p')
            songs.textContent = 'Famous Artists: ' + genre.songs
            card.appendChild(songs)

            const link = document.createElement('a')
            link.textContent = 'Read More'
            link.setAttribute('role', 'button')
            link.href = 'genre.html'
            card.appendChild(link)

            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Genres Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderGenres()
}