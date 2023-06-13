import Author from "../../models/Author.js"

export default async(rec,res)=> {
    try {
        let data = req.body           //el cliente envia un objeto en la propiedad body del objeto req
        let one = Author.create(data)      //el objeto data deberia contener todos los datos necesarios para crear algo
        if (one) {
            return res.status(201).json({
                response: one,
                message: 'created'
            })
        } else {
            return res.status(400).json({
                response: null,
                message: 'not created'
            })
        }
    } catch (error){
        return res.status(500).json({
            response: null,
            message: 'not created'
        })
    }
}