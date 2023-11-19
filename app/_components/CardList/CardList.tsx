import { CardListInputColor, CardListInputNumber } from '../CardListInput'
import styles from './CardList.module.scss'

export function CardList({ type, id }: { type: string; id: number }) {
  const colors = ['red', 'blue', 'green', 'yellow', 'white']
  const numbers = ['1', '2', '3', '4', '5']

  const renderColorsList = () => {
    return colors.map((item) => (
      <li key={item} className={styles.item}>
        <CardListInputColor id={id} type={item} />
      </li>
    ))
  }

  const renderNumbersList = () => {
    return numbers.map((item) => (
      <li key={item} className={styles.item}>
        <CardListInputNumber id={id} type={item} />
      </li>
    ))
  }
  return (
    <ul className={styles.list}>
      {type === 'color' && renderColorsList()}
      {type === 'number' && renderNumbersList()}
    </ul>
  )
}
