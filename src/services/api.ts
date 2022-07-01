import axios from "axios";

export function api() {
    return axios.create({
        baseURL: "https://pokeapi.co/api/v2/"
    })
} 