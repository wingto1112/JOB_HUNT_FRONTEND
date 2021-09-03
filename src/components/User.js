import React from 'react'
import { useParams } from 'react-router-dom'

export const User = ({ userState }) => {
    const id = useParams().id
    console.log(id)
    console.log(userState)
    const user = userState.find(s => s.id === id)
    if (!user) {
        return null
    }
    return (
        <div>
            <h2>{user.username} </h2>
            <h3>added blogs</h3>
            {user.blogs.map(a => <li key={a.id}>{a.title}</li>)}
        </div>
    )
}
