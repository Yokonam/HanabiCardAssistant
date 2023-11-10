'use client'
import { useState } from 'react'
import styles from './page.module.scss'
import { Card } from './_components/Card/'

interface Card {
  id: number
  onDelete: () => void
}

export default function Home() {
  const initialCards = Array.from({ length: 5 }, (_, index) => ({
    id: index
  }))
  const [cards, setCards] = useState(initialCards)
  const [nextId, setNextId] = useState(5)

  const handleDelete = (id: number) => {
    setCards((prevCards) => {
      const filteredCards = prevCards.filter((card) => card.id !== id) // 削除されたカードを除外
      const newCard = { id: nextId } // 新しいカードを作成
      setNextId(nextId + 1) // 次のIDを更新
      return [...filteredCards, newCard] // 新しいカードをリストの最初に追加
    })
  }

  return (
    <div>
      <h1 className={styles.title}>Hanabi Card Assistant</h1>
      <div className={styles.list}>
        {cards.map((card) => (
          <div key={card.id} className={styles.item}>
            <Card {...card} onDelete={() => handleDelete(card.id)} />
          </div>
        ))}
      </div>
    </div>
  )
}
