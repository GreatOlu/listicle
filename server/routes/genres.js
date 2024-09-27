import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import genreData from '../data/genres.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()
router.get('/', (req, res) => {
    res.status(200).json(genreData)
  })

router.get('/:giftId', (req, res) => {
res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router