import axios from 'axios'

const api = axios.create({
    baseURL: 'https://server:3000/api',
    browserBaseURL: 'https://server:3000',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (d) => api.put(`/movie/${d.id}`, d.payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
