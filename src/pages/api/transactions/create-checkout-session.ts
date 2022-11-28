// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'



export default async function handler(req: NextApiRequest, res: NextApiResponse,) {

  // antes de criar a checkout session eu salvo a transação no meu banco de dados



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
        quantity: 10,

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

    payment_methods: {

      excluded_payment_types: [
        {
          id: "ticket",
        },
        {
          id: "credit_card",
        }
      ],
    }
  }

  const result = await mercadopago.preferences.create(preference)

  console.log(result)









  // pegar esse objeto de checkout session e dar uma estudada para ver o que preciso guardar no banco de dados


  res.status(200).json({ status: 'success', checkoutStripeUrl: result })


  // pegar esse objeto de checkout session e dar uma estudada para ver o que preciso guardar no banco de dados


  // retorna { status, urlCheckoutMP }
}
