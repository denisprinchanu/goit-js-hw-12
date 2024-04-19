import axios from 'axios';



export async function fetchImages(searchWord, currPage) {
  const KEY = '43321607-c59baa6fd3b5340d7e6bfbfa2';
  const URL = 'https://pixabay.com/api/';
  const resp = await axios.get(URL, {
    params: {
      key: KEY,
      q: searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currPage,
      per_page: 15,
    },
  });
  return resp.data;

}
