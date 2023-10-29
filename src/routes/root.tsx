import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'

import {
    itemRootContainer,
    itemRootH1,
    itemRootDiv,
} from '../utils/animation-variants'

interface Card {
    id: number
    name: string
    username: string
    email: string
}

export default function Root() {
    const [cards, setCard] = useState<Card[] | null>([])
    const [isVisable, setIsVisable] = useState(true)
    const [selectedCardId, setSelectedCardId] = useState<number | null>(null)

    const url = 'https://jsonplaceholder.typicode.com/users'

    const navigate = useNavigate()

    useEffect(() => {
        async function getCard() {
            const response = await fetch(url)
            const data = await response.json()

            setCard(data)
        }

        getCard()
    }, [])

    useEffect(() => {
        async function pause() {
            await new Promise((resolve) => setTimeout(resolve, 200))
        }

        if (!isVisable && selectedCardId !== null) {
            pause().then(() => {
                navigate(`user/${selectedCardId}`)
            })
        }
    }, [isVisable, selectedCardId, navigate])

    function handleVisibility(cardId: number) {
        setSelectedCardId(cardId)
        setIsVisable(false)
    }

    return (
        <AnimatePresence>
            <motion.div
                initial='hidden'
                animate={isVisable ? 'show' : 'navigating'}
                variants={itemRootContainer}
            >
                <motion.h1 variants={itemRootH1}>Animation Test</motion.h1>

                <motion.div variants={itemRootDiv} className='container'>
                    {cards
                        ? cards.map((card, index) => (
                              <motion.div
                                  key={card.id}
                                  initial={{ opacity: 0, y: 30 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                      duration: 0.4,
                                      delay: index * 0.15,
                                  }}
                                  onClick={() => {
                                      handleVisibility(card?.id)
                                  }}
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
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
