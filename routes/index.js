import { Router } from 'express'
import authorRoutes from './authors.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('Api root')
})

router.use('/authors', authorRoutes)

export default router;