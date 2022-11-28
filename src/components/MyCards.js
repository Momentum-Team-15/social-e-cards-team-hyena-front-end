import axios from 'axios'
import {useEffect, useState} from 'react'


export const MyCards = ({token}) => {
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
            <h1>My Cards</h1>
            {console.log(cards)}

            
        </div>
    )
}