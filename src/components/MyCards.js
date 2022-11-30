import { useEffect, useState } from 'react'
import { Card } from './Card'
import { Favorite } from './Favorite'
import { requestUsersCards } from './Requests'

export const MyCards = ({ token }) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        requestUsersCards(token)
            .then(res => setCards(res.data))
    }, [token])

    return (
        <div>
            <h1 className="page-title title is-4 has-text-centered">My Cards</h1>
            <div className="card-grid">
                {cards.map((card, idx) => (
                    <div key={idx}>
                        <div className="card">
                            <Card card={card} />
                            <div className="cardlist">
                                <p>by {card.user}</p>
                                <Favorite />
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                </div>
            </div>
        </div>
    )
}