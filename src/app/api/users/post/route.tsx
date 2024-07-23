import Connect from "@/db/db";
import posts from "@/models/postModel";




export async function POST(req: Request){
    try {
 
    await Connect()
    const reqBody =  await req.json();
    const {userid, content } = reqBody
    
    const postData = await posts.create({userid, content })
    return Response.json({messages: "successfully posted", postData })
        
    } catch (error) {
        console.log(error)    
    }
       
}