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
    <div className="d-flex flex-column mb-5">
      <button onClick={handleCardChoice} id={currentPair[0].id} className="py-3 border bg-light text-center overflow-hidden text-nowrap">
        {currentPair[0].text}
      </button>
      <div className="py-1 text-center">или</div>
      <button onClick={handleCardChoice} id={currentPair[1].id} className="py-3 border bg-light text-center overflow-hidden text-nowrap">
        {currentPair[1].text}
      </button>
    </div>
  );
};
