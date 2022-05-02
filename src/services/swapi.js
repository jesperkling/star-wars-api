/**
 * The Star Wars API
 */

import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

const getFilms = async () => {
    const response = await axios.get(`${BASE_URL}/films`);
    return response.data;
};

const getFilm = async (id) => {
    const response = await axios.get(`${BASE_URL}/films/${id}`);
    return response.data;
};

const getPeople = async (page) => {
    const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
    return response.data;
};

const getPerson = async (id) => {
    const response = await axios.get(`${BASE_URL}/people/${id}`);
    return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getFilms,
    getFilm,
    getPeople,
    getPerson,
};
