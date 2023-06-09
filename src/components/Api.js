import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=36261885-ace95c32b2b407d9c65e4399b&image_type=photo&orientation=horizontal&per_page=12';

export const getPictures = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=36261885-ace95c32b2b407d9c65e4399b&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
