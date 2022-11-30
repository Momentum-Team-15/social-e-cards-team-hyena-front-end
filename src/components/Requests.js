import axios from 'axios'

export const requestNewUser = (username, password) => {
    const url = 'https://ecard-web-service.onrender.com/auth/users'

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

export const requestCreateCard = (token) => {
    const url = 'https://ecard-web-service.onrender.com/cards/user'

    const response = axios.post(url, 
        { headers: { Authorization: `Token ${token}`} })
        return response
}