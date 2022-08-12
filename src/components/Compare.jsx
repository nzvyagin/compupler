export const Compare = ({getPairs, resultList, setResultList}) => {
  const pairs = getPairs();
  console.log('allPairsIndicator: ', pairs.length);

  const currentPair = 0;
  console.log('currentPairIndicator: ', currentPair + 1);

  return (
    <div>Сравнение</div>
  );
};
