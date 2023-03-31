import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/?';

export async function fetchImg(content, page) {
  const searchParams = new URLSearchParams({
    key: '34932179-276c40b4db04246ec029e1b1f',
    q: content,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  });
  return axios.get(`${baseUrl}${searchParams}`);
}
