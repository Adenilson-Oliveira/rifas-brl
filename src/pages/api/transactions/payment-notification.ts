import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../../lib/axios";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const reqQuery = req.query
  const reqBody = req.body

  console.log({
    reqQuery,
    reqBody
  })

  if (reqBody.resource) {
    const result = await api.get(`${reqBody.resource}`)
    console.log(result)
  }

  // Quando você recebe uma notificação na sua plataforma, 
  // o Mercado Pago aguarda uma resposta para validar se você a recebeu corretamente. 
  // Para isso, você deve retornar um HTTP STATUS 200 (OK) ou 201 (CREATED) 
  res.status(200)
} 