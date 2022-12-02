import { useState, useEffect } from 'react'
import { Card } from './Card'
import { Favorite } from './Favorite'
import { requestAllCards, requestFriends } from './Requests'
import { Delete } from './Delete'
import { Follow } from './Follow'
import { Unfollow } from './Unfollow'

export const AllCards = ({ token, username }) => {
    const [cards, setCards] = useState([])
    const [friendList, setFriendList] = useState([])

    useEffect(() => {
        requestAllCards(token)
            .then(res => setCards(res.data))
    }, [token])

    useEffect(() => {
        requestFriends(token)
            .then(res => setFriendList(res.data))
    }, [token])

    const myFriends = friendList.map((friends) => {
        return friends.friend
    })

    return (
        <section>
            <h1 className="page-title title is-4 has-text-centered">All Cards</h1>
            <div className="card-grid">
                {cards.map((card, idx) => (
                    <div className="card" key={idx}>
                        <Card token={token} card={card} username={username} />
                        <div className="cardlist">
                            <p>by {card.user}</p>
                            <div className="is-flex">
                            {myFriends.includes(card.user) || username === card.user ? (null) : (<Follow token={token} author={card.user}/>)}
                            {myFriends.includes(card.user) ? (<Unfollow token={token} myFriends={myFriends} friendList={friendList} card={card}/>) : (null)}
                            {username === card.user && (<Delete token={token} cardId={card.id} />)}
                            <Favorite />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};