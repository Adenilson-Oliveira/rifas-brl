// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'



export default async function handler(req: NextApiRequest, res: NextApiResponse,) {

  // antes de criar a checkout session eu salvo a transação no meu banco de dados

  if (req.method !== 'POST') {
    return res.status(404).json({
      message: 'method not supported'
    })
  }

  // id do preço do produto 
  const { priceId, cotas } = req.body
  const qtde = cotas.ativas.length

  const successUrlApp = `${process.env.NEXT_URL}/success`
  const cancelUrlApp = `${process.env.NEXT_URL}/`


  mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN
  })


  let preference: CreatePreferencePayload = {
    items: [
      {
        title: 'Cota da Rifa do Ifhone',
        unit_price: 1.99,
        quantity: qtde,

        // url da img do item
        picture_url: "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
      }
    ],
    back_urls: {
      success: successUrlApp,
      failure: cancelUrlApp,
      pending: cancelUrlApp,
    },
    auto_return: "all",

    // id of the transaction in the database 
    external_reference: '',

    // name of the business 
    statement_descriptor: "MY BUSINESS Teste ",

    payment_methods: {

      excluded_payment_types: [
        {
          id: "ticket",
        },
        {
          id: "credit_card",
        }
      ],
    },
    notification_url: `${process.env.NEXT_URL}/api/transactions/payment-notification`
  }

  const result = await mercadopago.preferences.create(preference)

  console.log(result)









  // pegar esse objeto de checkout session e dar uma estudada para ver o que preciso guardar no banco de dados


  res.status(200).json({ status: 'success', checkoutMPUrl: result.body.init_point })


  // pegar esse objeto de checkout session e dar uma estudada para ver o que preciso guardar no banco de dados


  // retorna { status, urlCheckoutMP }
}
