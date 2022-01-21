import { Telegraf } from 'telegraf'
import { paymentMethods, timeIntervals } from '../constants'
import { findInArray } from '../utils/arrays'

export default async function sendTelegramNotification(order) {
  const bot = new Telegraf(process.env.TELEGRAM_BOT_API)

  await bot.telegram.sendMessage(
    '-679959524',
    '*⚡ ⚡ ⚡  Новый заказ!!! ⚡ ⚡ ⚡*',
    {
      parse_mode: 'Markdown',
    }
  )

  await bot.telegram.sendMessage('-679959524', prepareText(order), {
    parse_mode: 'Markdown',
  })
}

function prepareText({
  phone,
  name,
  email,
  city,
  address,
  apt,
  summary,
  selfMade,
  products,
  time,
  payment,
  pid,
}) {
  const selfString = selfMade ? 'Готовит сам' : 'Нужно готовить'
  return `
  *Номер:* #${pid}
  *Продукты:*
  *Сумма заказа:* ${summary}*₴*
  ${prepareProducts(products)}
  ---------------------
  *${selfString}*
  *Заказчик:* ${name}
  *Номер телефона:* ${phone.replaceAll(' ', '')}
  *E-mail:* ${email}
  *Адрес:* ${city}, ${address}, кв. ${apt}
  *Оплата:* ${findInArray(paymentMethods, payment)}
  *Доставка:* ${findInArray(timeIntervals, time)}
  `
}

function prepareProducts(products) {
  return products.map((product) => {
    return `Набор ${product.product.name}x${product.quantity}`
  })
}
