import { nanoid } from 'nanoid/non-secure';

export const createEntries = (data) => {
  const sourceList = data.includes(',')
    ? data.split(',')
    : [data];

  const entriesList = sourceList.map(item => {
    return {
      text: item.trim(),
      id: nanoid(6),
      rating: null
    };
  });

  return entriesList;
};

export const combinePairwise = (arr) => {
  if(arr.length < 2) return [];

  const [first, ...rest] = arr;
  const pairs = rest.map(x => [first, x]);

  return pairs.concat(combinePairwise(rest));
};
