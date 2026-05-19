import axios from 'axios';

export const googleBooksAPI = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    timeout: 5000,
});

//buscar livros
export const searchBooks = async (query) => {
    try {
        const response = await googleBooksAPI.get('/volumes', {
            params: {
                q: query,
                maxResults: 10,
                langRestrict: 'pt,en,es',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching books:', error);
        throw error;
    }
};