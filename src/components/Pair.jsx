export const Pair = ({currentPair, currentIndex, setCurrentIndex, setResultList, resultList}) => {

  const handleCardChoice = (e) => {
    const choicedItem = resultList.find(item => item.id === e.target.id);
    const updatedItem = {...choicedItem};

    ++updatedItem.rating;

    setResultList(resultList.map(
      (item) => item.id === e.target.id ? updatedItem: item
    ));

    setCurrentIndex(++currentIndex);
  };

  return (
    <div id="comparePanel" className="mb-5">
      <div onClick={handleCardChoice} id={currentPair[0].id} className="py-3 border bg-light text-center" tabIndex={0}>
        {currentPair[0].text}
      </div>
      <div className="py-1 text-center">или</div>
      <div onClick={handleCardChoice} id={currentPair[1].id} className="py-3 border bg-light text-center" tabIndex={0}>
        {currentPair[1].text}
      </div>
    </div>
  );
};
