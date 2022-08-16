import { useState } from 'react';
import { Pair } from '../components';

export const Compare = ({getPairs, resultList, setResultList}) => {
  const pairs = getPairs();
  const [currentIndex, setCurrentIndex] = useState(0);

  if(currentIndex === pairs.length) {
    return <div>Результат</div>;
  }

  const currentPair = pairs[currentIndex];

  return (
    <Pair currentPair={currentPair} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setResultList={setResultList} resultList={resultList} />
  );
};
