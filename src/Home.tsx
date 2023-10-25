import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'

interface Card {
    id: number
    name: string
    username: string
    email: string
}

export default function Home() {
    const [cards, setCard] = useState<Card[] | null>([])

    useEffect(() => {
        async function getCard() {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
            const data = await response.json()

            console.log(data)

            setCard(data)
        }

        getCard()
    }, [])

    return (
        <>
            <h1>Animation Test</h1>

            <div className='container'>
                <AnimatePresence>
                    {cards
                        ? cards.map((card, index) => (
                              <motion.div
                                  key={card.id}
                                  custom={index} // Pass the index as a custom prop
                                  initial={{ opacity: 0, y: 30 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 30 }}
                                  transition={{
                                      duration: 0.7,
                                      delay: index * 0.15,
                                  }} // Adjust the delay
                                  layout
                              >
                                  <Card
                                      key={card.id}
                                      name={card.name}
                                      username={card.username}
                                      email={card.email}
                                  />
                              </motion.div>
                          ))
                        : null}
                </AnimatePresence>
            </div>
        </>
    )
}
