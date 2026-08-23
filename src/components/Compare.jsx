import { useState } from 'react';
import { Counter, Pair, Result, Undo } from './index.js';

export const Compare = ({ pairs, resultList, setResultList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reset = () => setResultList(null);

  if (currentIndex === pairs.length) return <Result resultList={resultList} onReset={reset} />;

  return (
    <>
      <Counter currentIndex={currentIndex} pairsCount={pairs.length} />
      <Pair currentPair={pairs[currentIndex]} setCurrentIndex={setCurrentIndex} setResultList={setResultList} />
      <Undo onReset={reset} />
    </>
  );
};
