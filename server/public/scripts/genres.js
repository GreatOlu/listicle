const renderGenres = async () => {
    
    const response = await fetch('/genres')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')

            const name = document.createElement('h3')
            name.textContent = gift.name
            card.appendChild(name)

            const origin = document.createElement('p')
            pricePoint.textContent = 'Origin: ' + genre.origin
            card.appendChild(origin)

            const artists = document.createElement('p')
            audience.textContent = 'Famous Artists: ' + genre.artists
            card.appendChild(artists)

            const songs = document.createElement('p')
            audience.textContent = 'Famous Artists: ' + genre.songs
            card.appendChild(songs)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            // link.href = `/gifts/${gift.id}`
            link.href = '#'
            card.appendChild(link)

            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

renderGenres()