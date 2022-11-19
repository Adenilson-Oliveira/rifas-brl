// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../../lib/stripe'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const priceId = ''
  const quantidade = 5

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: '/',
    cancel_url: '/',
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: quantidade,
      },
    ],
  })

  console.log(checkoutSession)

  res.status(200).json({ name: 'Hello World!' })
}
