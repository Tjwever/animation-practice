import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import '../App.css'
import { Link } from 'react-router-dom'

interface Card {
    id: number
    name: string
    username: string
    email: string
}

export default function Root() {
    const [cards, setCard] = useState<Card[] | null>([])
    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        async function getCard() {
            const response = await fetch(url)
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
                                  <Link to={`user/${card.id}`}>
                                      <Card
                                          key={card.id}
                                          name={card.name}
                                          username={card.username}
                                          email={card.email}
                                      />
                                  </Link>
                              </motion.div>
                          ))
                        : null}
                </AnimatePresence>
            </div>
        </>
    )
}
