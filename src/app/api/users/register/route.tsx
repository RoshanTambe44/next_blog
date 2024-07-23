import Connect from "@/db/db"
import user from "@/models/userModel"


export async function POST(req:Request) {
  await Connect()
  const reqBody =  await req.json()
  const {username, email, password} = reqBody
  const data = await user.create({username , email, password})

  return Response.json({message :"success", data })
}


