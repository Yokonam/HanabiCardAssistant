import React, { useState } from 'react'
import { CardInputColor, CardInputNumber } from '../CardInput'
import styles from './Card.module.scss'

export function Card({ id, onDelete }: { id: number; onDelete: () => void }) {
  const colors = ['red', 'blue', 'green', 'yellow', 'white']
  const numbers = ['1', '2', '3', '4', '5']

  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => onDelete(), 500)
  }

  return (
    <div className={`${styles.card} ${isDeleting ? styles.cardFadeOut : ''}`}>
      <p className={styles.id}>{id}</p>
      <div className={styles.row}>
        <div className={`${styles.color}`}>
          <ul className={styles.list}>
            {colors.map((color) => (
              <li key="" className={styles.item}>
                <CardInputColor id={id} color={color} />
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.number}`}>
          <ul className={styles.list}>
            {numbers.map((number) => (
              <li key="" className={styles.item}>
                <CardInputNumber id={id} number={number} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={handleDelete} className={styles.deleteButton}>
          Delete
        </button>
      </div>
    </div>
  )
}
