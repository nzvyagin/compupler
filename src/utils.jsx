import { nanoid } from 'nanoid/non-secure';

export const createEntry = (text) => {
  return {
    text: text,
    id: nanoid(6),
    rating: null
  };
};

export const combinePairwise = (arr) => {
  if(arr.length < 2) return [];

  const [first, ...rest] = arr;
  const pairs = rest.map(x => [first, x]);

  return pairs.concat(combinePairwise(rest));
};
