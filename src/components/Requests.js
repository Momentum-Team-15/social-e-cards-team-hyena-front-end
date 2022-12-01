import axios from 'axios'

export const requestNewUser = (username, password) => {
    const url = 'https://ecard-web-service.onrender.com/auth/users/'

    const response = axios.post(url, {
        username: username,
        password: password})
        return response
}

export const requestLogin = (username, password) => {
    const url = 'https://ecard-web-service.onrender.com/auth/token/login'

    const response = axios.post(url, {
        username: username,
        password: password})
        return response
}

export const requestLogout = (token) => {
    const url = 'https://ecard-web-service.onrender.com/auth/token/logout'

    const response = axios.post(url,
        { headers: { Authorization: `Token ${token}`, }, })
        return response
    }

export const requestAllCards = (token) => {
    const url = 'https://ecard-web-service.onrender.com/cards'

    const response = axios.get(url,
        { headers: { Authorization: `Token ${token}`, }, })
        return response
}

export const requestSingleCard = (token, cardId) => {
    const url = `https://ecard-web-service.onrender.com/cards/${cardId}`

    const response = axios.get(url,
        { headers: { Authorization: `Token ${token}`} })
        return response
}

export const requestDeleteCard = (token, cardId) => {
    const url = `https://ecard-web-service.onrender.com/cards/${cardId}`

    const response = axios.delete(url,
        { headers: { Authorization: `Token ${token}`} })
        return response
}

export const requestCreateCard = (token, createContainer) => {
    const url = 'https://ecard-web-service.onrender.com/cards/user/'

    axios.post(url, 
        createContainer,
        { headers: {Authorization: `Token ${token}`}})
}


export const requestUsersCards = (token) => {
    const url = 'https://ecard-web-service.onrender.com/cards/user'

    const response = axios.get(url, 
        { headers: { Authorization: `Token ${token}`} })
        return response
}

export const requestFriends = (token) => {
    const url = 'https://ecard-web-service.onrender.com/friends/'

    const response = axios.get(url,
        { headers: { Authorization: `Token ${token}`}})
        return response
}

export const requestUserInfo = (token, username) => {
    const url = `https://ecard-web-service.onrender.com/profile/search/?q=${username}`

    const response = axios.get(url,
        { headers: { Authorization: `Token ${token}`}})
        return response
}

export const requestAddFriend = (token, friendId) => {
    const url = 'https://ecard-web-service.onrender.com/friends/'

    const response = axios.post(url,

        {friend: friendId},
    
        {headers: { Authorization: `Token ${token}`}})
        return response
}

export const requestRemoveFriend = (token, friendshipId) => {
    const url = `https://ecard-web-service.onrender.com/friends/${friendshipId}`

    const response = axios.delete(url,
        {headers: { Authorization: `Token ${token}`}})
        return response
}