import Balance from './icons/for/Balance'
import Health from './icons/for/Health'
import Sport from './icons/for/Sport'
import Time from './icons/for/Time'
import Straight from './icons/for/Straight'
import Loss from './icons/for/Loss'

export const paymentMethods = [
  { name: 'Приватбанк', id: 'privat' },
  { name: 'Duino-coin', id: 'duco' },
  { name: 'При получении', id: 'onarrival' },
]

export const timeIntervals = [
  { name: '6:00 - 7:00', id: '67' },
  { name: '7:00 - 8:00', id: '78' },
  { name: '8:00 - 9:00', id: '89' },
]

export const forVariants = [
  {
    icon: <Balance />,
    name: 'Ищущим баланс во всём',
  },
  {
    icon: <Health />,
    name: 'За здоровое питание',
  },
  {
    icon: <Sport />,
    name: 'Занимающимся спортом',
  },
  {
    icon: <Time />,
    name: 'Бережливым ко времени',
  },
  {
    icon: <Straight />,
    name: 'Поддерживающим свой вес',
  },
  {
    icon: <Loss />,
    name: 'Желающих сбросить вес',
  },
]
