import Connect from "@/db/db";
import user from "@/models/userModel";


export async function POST (req:Request ){

    await Connect()
    const reqBody= await req.json()
    const {email, password} = reqBody
    const userData = await user.findOne({email});
    console.log(userData)

   
        if(!userData){
        
            return Response.json({message: "wrong email" })
        }
    
        if( password != userData.password ){
            return Response.json({message:" wrong password"})
        }
       
        else{ return  Response.json({message :"login success", userData})}
        
 
    

    

}
