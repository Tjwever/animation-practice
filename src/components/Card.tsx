interface CardProps {
    name: string
    username: string
    email: string
}

export default function Card({ name, username, email }: CardProps) {
    return (
        <div className='card'>
            <p className='name'>{name}</p>
            <hr />
            <p className='username'>{username}</p>
            <p className='email'>{email}</p>
        </div>
    )
}
