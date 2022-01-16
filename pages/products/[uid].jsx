import React from 'react'
import styles from './[uid].module.scss'
import PriceTag from '../../components/basic/PriceTag'
import Button from '../../components/basic/Button'
import SpecItem from '../../components/basic/SpecItem'
import ForItem from '../../components/basic/ForItem'
import ProductItemCard from '../../components/ProductItemCard'

const Product = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.container__image}
        style={{
          backgroundImage:
            'url("https://yaro.ua/assets/cache_image/img-2284_0x0_6f7.webp")',
        }}
      >
        <PriceTag>599</PriceTag>
        <Button variant="primary-action">Купить</Button>
      </div>

      <section className={styles.container__content}>
        <h1 className={styles.container__content__heading}>СлимFit</h1>
        <p className={styles.container__content__desc}>
          Набор позволяет почувствовать легкость уже с первого дня программы, но
          если вы хотите проверить, подходит ли наша система питания вам
          индивидуально и точно знать, что вас ждет, - закажите пробный день.
        </p>

        <div className={styles.container__content__specs}>
          <SpecItem variant="l-primary" data="1400 ккал" />
          <SpecItem variant="l-secondary" data="8 дней" />
          <br />
          <br />
          <br />
          <SpecItem variant="s-primary" type="Жиры" data="32,6 г." />
          <SpecItem variant="s-primary" type="Углеводы" data="32,6 г." />
          <SpecItem variant="s-primary" type="Белки" data="32,6 г." />
        </div>

        <div className={styles.container__content__for}>
          <h2>Для кого подходит?</h2>
          <ForItem variant={0} />
          <ForItem variant={1} />
          <ForItem variant={2} />
          <ForItem variant={3} />
        </div>

        <div className={styles.container__content__items}>
          <h2>Что входит в меню?</h2>
          <ProductItemCard />
          <ProductItemCard />
        </div>
      </section>
    </div>
  )
}

export default Product
