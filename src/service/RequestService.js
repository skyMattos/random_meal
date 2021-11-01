const API_HOST = 'https://www.themealdb.com/api/json/v1'


export const get = async (endpoint) => {
    return fetch(`${API_HOST}${endpoint}`)
    .then((response) => response.json())
}