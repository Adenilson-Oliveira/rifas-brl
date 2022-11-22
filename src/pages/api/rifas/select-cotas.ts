import { Prisma, RifaIFhone } from "@prisma/client";
import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/prisma/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token, qtde, database } = req.body

  if (!token || !database || !qtde) {
    // error de credentials invalid
  }

  const quantidadeCotas = parseInt(qtde)

  try {
    const payloadToken = verify(token, process.env.JWT_SECRET_KEY)
    // console.log(payloadToken)

    const idUser: string =
      typeof payloadToken.sub === 'string' ? payloadToken.sub : 'idInvalid'

    if (idUser === 'idInvalid') {
      res.status(200).json({ tokenIsValid: false, })
    }

    const user = await prisma.user.findFirst({
      where: { id: idUser },
    })

    // if (!user) {
    //   return res.status(200).json({
    //     tokenIsValid: false,
    //   })
    // }

    // const cotas = await prisma.$queryRaw<RifaIFhone[]>(Prisma.sql`SELECT * FROM (${database}) WHERE status='available' ORDER BY RANDOM() LIMIT 1`)

    const cotas = await prisma.$queryRaw`SELECT * FROM ${Prisma.raw(database)} WHERE status='available' ORDER BY RANDOM() LIMIT ${Prisma.raw(qtde)}`

    // atualizar aqui para reserved 

    console.log(cotas)

    return res.status(200).json({
      status: 'success',
      cotas
    })

  } catch (err) {

    console.log(err)
    return res.status(200).json({
      status: 'error',
      tokenIsValid: false,
    })

  }

}