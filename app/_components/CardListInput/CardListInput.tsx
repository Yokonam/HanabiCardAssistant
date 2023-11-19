import styles from './CardListInput.module.scss'
export interface CardListInputProps {
  type: string
  id: number
}

export function CardListInputColor({ type, id }: CardListInputProps) {
  return (
    <div className={`${styles[type]}  ${styles.item}`}>
      <input
        type="checkbox"
        id={`${type}${id}`}
        className={styles.input}
        name={`color${id}`}
      ></input>
      <label htmlFor={`${type}${id}`} className={styles.label}></label>
    </div>
  )
}

export function CardListInputNumber({ type, id }: CardListInputProps) {
  return (
    <div className={`${styles.number}  ${styles.item}`}>
      <input
        type="checkbox"
        id={`${type}${id}`}
        className={styles.input}
        name={`number${id}`}
      ></input>
      <label htmlFor={`${type}${id}`} className={styles.label}>
        <span>{type}</span>
      </label>
    </div>
  )
}
