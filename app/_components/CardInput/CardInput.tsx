import styles from './CardInput.module.scss'
export interface CardInputColorProps {
  color: string
  id: number
}

export interface CardInputNumberProps {
  number: string
  id: number
}

export function CardInputColor({ color, id }: CardInputColorProps) {
  return (
    <div className={`${styles[color]}  ${styles.item}`}>
      <input
        type="checkbox"
        id={`${color}${id}`}
        className={styles.input}
        name={`color${id}`}
      ></input>
      <label htmlFor={`${color}${id}`} className={styles.label}></label>
    </div>
  )
}

export function CardInputNumber({ number, id }: CardInputNumberProps) {
  return (
    <div className={`${styles.number}  ${styles.item}`}>
      <input
        type="checkbox"
        id={`${number}${id}`}
        className={styles.input}
        name={`number${id}`}
      ></input>
      <label htmlFor={`${number}${id}`} className={styles.label}>
        <span>{number}</span>
      </label>
    </div>
  )
}
