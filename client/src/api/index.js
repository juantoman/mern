import axios from 'axios'

var URLdomain = window.location.host;
//console.log(URLdomain);

var baseURL;

if ( URLdomain == "localhost:8000" ) {
    baseURL = "http://localhost:3000/api"
} else {
    baseURL = "https://api.symbi.ga/api"
}

//console.log(baseURL);

const api = axios.create({
    baseURL: baseURL,
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
