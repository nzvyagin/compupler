import { useState } from 'react';
import { Pair, Result, Counter } from '../components';

export const Compare = ({getPairs, resultList, setResultList}) => {
  const pairs = getPairs();
  const [currentIndex, setCurrentIndex] = useState(0);

  if(currentIndex === pairs.length) {
    return <Result resultList={resultList} />;
  }

  const currentPair = pairs[currentIndex];

  return (
    <>
      <Counter currentIndex={currentIndex} pairs={pairs} />
      <Pair currentPair={currentPair} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setResultList={setResultList} resultList={resultList} />
    </>
  );
};
