import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '29118139-f0fadce498ed45b93da5b0f44';

const getMaterial = async (name, page) => {
    const options = new URLSearchParams({
        key: API_KEY,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 12,
    })

    const response = await axios.get(`${API_URL}?${options}`);
    return response.data.hits;
}

export default getMaterial;