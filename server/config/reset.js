import { pool } from './database.js'
import './dotenv.js'
import genreData from '../data/genres.js'

const createGenresTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS genres;

        CREATE TABLE IF NOT EXISTS genres (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            origin VARCHAR(10) NOT NULL,
            artists VARCHAR(255) NOT NULL,
            songs VARCHAR(255) NOT NULL,
            description TEXT NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('genres table created successfully')
    } catch (err) {
        console.error('error creating genres table', err)
    }
}

const seedGenresTable = async () => {
    await createGenresTable()

    genreData.forEach((genre) => {
        const insertQuery = {
            text: 'INSERT INTO genres (name, origin,artists, songs, description) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            genre.name,
            genre.origin,
            genre.artists,
            genre.songs,
            genre.description,
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('error inserting genre', err)
                return
            }

            console.log(`✅ ${genre.name} added successfully`)
        })
    })
}

seedGenresTable()


