import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const reqQuery = req.query
  const reqBody = req.body

  console.log({
    reqQuery,
    reqBody
  })

  res.status(201)
} 