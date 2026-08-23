export function createEntries(data) {
  return data
    .split(/,|\r?\n/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text) => ({ id: crypto.randomUUID(), text, rating: 0 }));
}

export function combinePairwise(items) {
  const pairs = [];
  for (let first = 0; first < items.length - 1; first += 1) {
    for (let second = first + 1; second < items.length; second += 1) {
      pairs.push([items[first], items[second]]);
    }
  }
  return pairs;
}
