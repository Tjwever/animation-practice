import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import {
    itemDetailsContainer,
    itemDetailsVariants,
} from '../utils/animation-variants'
import Modal from '../components/Modal'

interface Card {
    id: number
    name: string
    username: string
    email: string
    address: string
    street: string
    phone: string
}

export default function Details() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [user, setUser] = useState<Card | null>(null)
    const [isVisable, setIsVisable] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function getCardDetails() {
            const response = await fetch(`${url}/${userId}`)
            const data = await response.json()

            setUser(data)
        }

        getCardDetails()
    }, [userId])

    useEffect(() => {
        async function pause() {
            await new Promise((resolve) => setTimeout(resolve, 200))
        }

        if (!isVisable) {
            pause().then(() => {
                console.log('SUPPOSED TO NAVIGATE')
                navigate('/')
            })
        }
    }, [isVisable])

    async function handleVisibility() {
        setIsVisable(false)
    }

    return (
        // <AnimatePresence>
        <>
            <motion.div
                initial={'hidden'}
                animate={isVisable ? 'show' : 'navigating'}
                variants={itemDetailsContainer}
                className='details-container'
            >
                <motion.h1>{user?.name}</motion.h1>
                <motion.div variants={itemDetailsVariants} className='bio'>
                    <p className='name'>
                        {user?.name}, is also known as {user?.username} online.
                        <br />
                        We're not allowed to tell you that they live at{' '}
                        {user?.address.street}
                    </p>
                    <hr />
                    <p className='username'>{user?.phone}</p>
                    <p className='email'>{user?.email}</p>
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact Today!
                    </motion.button>
                </motion.div>
                <br />
                <motion.button
                    variants={itemDetailsVariants}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleVisibility}
                >
                    Go back
                </motion.button>
            </motion.div>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
        // </AnimatePresence>
    )
}
