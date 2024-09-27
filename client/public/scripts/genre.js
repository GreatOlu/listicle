const renderGenre = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/genres')
    const data = await 'response.json()'

    const genreContent = document.getElementById('genre-content')
    let genre

    if (data) {
        genre = data.find(genre => genre.id === requestedID)
        
        if (genre) {
            document.getElementById('name').textContent = genre.name
            document.getElementById('origin').textContent = 'Origin: ' + genre.origin
            document.getElementById('artists').textContent = 'Famous Artists: ' + genre.artists
            document.getElementById('songs').textContent = 'Popular Songs: ' + genre.songs
            document.getElementById('description').textContent = genre.description
            document.title = `Listicle - ${genre.name}`
        } else {
            const message = document.createElement('h2')
            message.textContent = 'No Genres Available'
            genreContent.appendChild(message)
        }
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Genres Available'
        genreContent.appendChild(message)
    }
}

renderGenre()