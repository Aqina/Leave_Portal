import { text } from "express"
import HRDAO from "../dao/hr.js"

export default class HRCtrl{
    static async apiPostReview(req,res,next)
    {
        try{
            const restaurantId = req.body.restaurant_id
            const review  =  req.body/text
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }
            const date = new Date()

            const ReviewResponse = await HRDAO.addReview(
                restaurantId,
                userInfo,
                review,
                date,
            )
            res.json({status: "success"})
        }catch(e)
        {
            res.status(500).json({error: e.message})
        }
    }

    static async apiUpdateReview(req, res, next) {
        try{
        
        const reviewId = req.body.review_id
        const text = req.body.text
        const date = new Date()
        
        const reviewResponse = await HRDAO.updateReview(
            reviewId,
            req.body.user_id,
            text,
            date,
        )
        
        var { error } = reviewResponse
        if (error) {
        res.status(400).json({ error })
        }
        
        if(reviewResponse.nodifiedCount === 0){
            throw new Error("unable to update review - user may not be original")}
        
        res.json({status : "success"})
        } catch(e){
            res.status(500).json({error: e.message})
        }
        }

    static async apiDeleteEmp(req,res,next){
        try{
            const Emp_Id = req.query.Emp_Id
            
            console.log(Emp_Id)
            const reviewResponse = await HRDAO.deleteEmp(
                Emp_Id
            )
            res.json({status: "success"})
        }catch(e)
        {
            res.status(500).json({error: e,message})
        }
    }


}