import express from 'express'
import validUrl from 'valid-url'
import shortid from 'shortid'
import Url from '../models/url.js'
import url from '../models/url.js'

const router = express.Router()

router.post('/shorten', async(req, res)=>{
    const {longurl} = req.body
    const baseurl = 'http://localhost:5000'
    if (!validUrl.isUri(baseurl)){
        return res.status(401).json({
            message: 'Invalid BaseURL'
        })
    }
    const urlcode = shortid.generate()
    if (validUrl.isUri(baseurl)){
        try {
            let url = await Url.findOne({longurl})
            if (url){
                return res.json(url)
            }
            else {
                const shorturl = baseurl + '/' + urlcode
                url = new Url({
                    longurl, shorturl, urlcode, date: new Date()
                })
                await url.save()
                res.json(url)
            }
        } catch (e) {
            console.log(e)
            res.status(500).json({
                message: 'Server Crashed, sorry for the inconvenience.'
            })
        }
    }
    else{
        res.status(401).json({
            message: 'Invalid LongURL'
        })
    } 
})

export default router