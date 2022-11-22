// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../../lib/stripe'



export default async function handler(req: NextApiRequest, res: NextApiResponse,) {

  // antes de criar a checkout session eu salvo a transação no meu banco de dados


  // id do preço do produto 
  const { priceId, cotas } = req.body
  const qtde = cotas.ativas.length

  const successUrl = `${process.env.NEXT_URL}/success`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: qtde,
      },
    ],
    payment_method_types: [
      'card',

    ],
    customer_email: 'teste1@teste.com',
  })

  console.log(checkoutSession)

  // pegar esse objeto de checkout session e dar uma estudada para ver o que preciso guardar no banco de dados


  res.status(200).json({ status: 'success', checkoutStripeUrl: checkoutSession.url })
}
