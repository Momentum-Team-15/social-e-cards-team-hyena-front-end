import axios from 'axios'
import {useEffect, useState} from 'react'
import { Card } from './Card'
import { Favorite } from './Favorite';

export const MyCards = ({props, token}) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('https://hyena-ecards.onrender.com/ecard/', {
            headers: {
                Authorization: `Token ${token}`,
            }
        })
        .then(res => setCards(res))
    }, [token])

    return(
        <div>
            <h1 className="page-title title is-4 has-text-centered">My Cards</h1>
            <div className="card-grid">
            {props.data.map((card, idx) => (
                <div key={idx}>
                {props.username === card.user.author && (
                <div className="card" key={idx}>
                
                        <Card card={card}/>
                        <div className="cardlist">
                            <p>by {card.user.author}</p>
                            <Favorite />
                        </div>
                    </div>
                        )}
                </div>
                ))}

            </div>
        </div>
    )
}