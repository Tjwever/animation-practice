import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Card {
    id: number
    name: string
    username: string
    email: string
}


export default function Details() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [user, setUser] = useState<Card | null>(null)

    const { userId } = useParams() 

    useEffect(() => {
        async function getCardDetails() {
            const response = await fetch(`${url}/${userId}`)
            const data = await response.json()

            setUser(data)
        }

        getCardDetails()
    }, [userId])

    return (
        <div className='card'>
            <p className='name'>{user?.name}name</p>
            <hr />
            <p className='username'>{user?.username}</p>
            <p className='email'>{user?.email}email</p>
        </div>
    )
}
