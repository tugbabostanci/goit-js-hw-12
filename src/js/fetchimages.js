import axios from 'axios';

const API_KEY = '53213667-a2fc459fbd1b81236d446f31b';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 40;

export async function fetchImagesWithAxios(query, page = 1) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                per_page: PER_PAGE,
                page: page,
            },
        });

        return {
            hits: response.data.hits,
            totalHits: response.data.totalHits,
        };
    } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error.message);

        throw new Error('API isteği başarısız oldu.');
    }
}