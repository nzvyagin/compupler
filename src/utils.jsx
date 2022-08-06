export const combinePairwise = (arr) => {
  if(arr.length < 2) return [];

  const [first, ...rest] = arr;
  const pairs = rest.map(x => [first, x]);

  return pairs.concat(combinePairwise(rest));
};
