import Balance from './icons/for/Balance'
import Health from './icons/for/Health'
import Sport from './icons/for/Sport'
import Time from './icons/for/Time'
import Straight from './icons/for/Straight'
import Loss from './icons/for/Loss'

export const PROJECT_NAME = 'eat-in'

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
    id: 0,
  },
  {
    icon: <Health />,
    name: 'За здоровое питание',
    id: 1,
  },
  {
    icon: <Sport />,
    name: 'Занимающимся спортом',
    id: 2,
  },
  {
    icon: <Time />,
    name: 'Бережливым ко времени',
    id: 3,
  },
  {
    icon: <Straight />,
    name: 'Поддерживающим свой вес',
    id: 4,
  },
  {
    icon: <Loss />,
    name: 'Желающих сбросить вес',
    id: 5,
  },
]
