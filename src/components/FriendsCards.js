import axios from "axios"
import { useEffect, useState } from 'react'



export const Friends = ({ token }) => {
    const [friendList, setFriendList] = useState([])

    useEffect(() => {
        axios.get('https://ecard-web-service.onrender.com/friends/', {
            headers: {
                Authorization: `Token ${token}`,
            }
        })
            .then(res => setFriendList(res.data))
    }, [token])

    return (<div>
        <h1 className="page-title title is-4 has-text-centered">Friends</h1>
        <div className="card-grid">
            <div>{friendList.map((friend, idx) => (
                <div key={idx}>
                    <div className="card">
                        <p>{friend.friend}</p>
                    </div>
                </div>
            ))}</div>
        </div>
    </div>
    )
}