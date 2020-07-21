import { IPost } from '../interfaces/IPost';

const apiUrl = 'https://jsonplaceholder.typicode.com';

const mapPostToModel = ({ userId, id, title, body }: IPost): IPost => {
  return {
    userId,
    id,
    title,
    body,
  };
};

export const getPostsByUserId = (userId: number | string) => {
  const queryString = userId ? `?userId=${userId.toString()}` : '';
  return fetch(`${apiUrl}/posts${queryString}`)
    .then((res) => res.json())
    .then((res) => res.map(mapPostToModel));
};
