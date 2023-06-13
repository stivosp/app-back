import Manga from '../../models/Manga.js'

export default async(req,res)=> {
    try {
        let all = await Manga.find()
        return res.status(200).json ({
            response: all,
            message: 'mangas found'
        })
    } catch (error) {
        return res.status(500).json({
            responde: null,
            error: 'error'
        })
    }
}