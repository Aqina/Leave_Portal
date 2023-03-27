

import mongodb, { ReturnDocument } from "mongodb"
const ObjectId = mongodb.ObjectId

let employees
export default class HRDAO{
    static async injectDB(conn){ 
        if(employees){
            return 
        }
        try{
            employees= await conn.db(process.env.RESTREVIEWS_NS).collection("Employees")
        }catch(e){
            console.error("Unable to establish collection handles in userDAO:, ",e)
        }
    }

    static async addReview(empId,user,review, date){
        try{
            const reviewDoc = {
                name: user.name,
                emp_id: emp._id,
                DOJ: date, 
                phnNo: phnNo, 
                mailID:mailID,}
                //emp_id: ObjectId(empId),}//ya gimme a minutes
            
            return await employees.insertOne(reviewDoc) 
        }catch(e)
        {
            console.error("Unable to post review: ",e)
            return {error: e}
        }
    }

    static async updateReview(Emp_Id, userId, text,date){
        try{
            const updateResponse =  await employees.updateOne(
                {user_id:userId, _id:ObjectId(reviewId)},
                {$set: {text: text,date: date}},
            )

            return updateResponse
        }catch(e){
            console.error("Unable to update review: ",e)
            return{error: e}
        }
    }

    static async deleteEmp(Emp_Id){
        try{
            const deleteResponse = await employees.deleteOne({
                Emp_Id: Emp_Id,
            })

            return deleteResponse
        }catch(e){
            console.error("unable to delete review: ",e)
            return{error: e}
        }
    }
}

