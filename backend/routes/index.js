import express from 'express'
import Url from '../models/url.js'

const router = express.Router()

router.get('/:code', async(req, res)=>{
    try {
        const url = await Url.findOne({urlcode: req.params.code})
        if (url){
            return res.redirect(url.longurl)
            
        }
        else {
            return res.status(404).json('404 - Not Found >:<')
        }
    } catch (e) {
        console.log(e)
        res.status(404).json('404 - Not Found >:<')
    }
})

export default router