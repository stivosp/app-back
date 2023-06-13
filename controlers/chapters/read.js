import Chapter from '../../models/Chapter.js'

export default async(req,res)=> {
    try {
        let all = await Chapter.find();
        if(all) {
            return res.status(200).json ({
                message: 'chapters',
                Response: all
            })
        } else {
            return res.status(404).json ({
                response: null,
                message: 'chapters not found!'
            })
        }
    } catch (error) {
        return res.status(500).json ({
            message: 'error',
            response: null
        })
    }
}