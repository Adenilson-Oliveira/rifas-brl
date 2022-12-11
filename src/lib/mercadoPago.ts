// TEST-c55f0fe2-2efe-418e-9533-321ab70d17ad

// TEST-4466207663202596-030414-7b0c3d1254757133bd2b2e91d9ac9b89-403251035

// SDK do mercado pago 
import mercadopago from 'mercadopago'



mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN
})

export default async function gerarChekout() {
  let preference = {
    items: [
      {
        title: 'Cota da Rifa do Ifhone',
        unit_price: 100,
        quantity: 1,
      }
    ]
  }

  const res = await mercadopago.preferences.create(preference)

  console.log(res)
  return res
}
