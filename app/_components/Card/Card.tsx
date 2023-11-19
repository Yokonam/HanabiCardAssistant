import React, { useState } from 'react'
import { CardList } from '../CardList'
import styles from './Card.module.scss'

export function Card({ id, onDelete }: { id: number; onDelete: () => void }) {
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
          <CardList type={'color'} id={id} />
        </div>
        <div className={`${styles.number}`}>
          <CardList type={'number'} id={id} />
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
