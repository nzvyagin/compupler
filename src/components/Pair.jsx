export const Pair = ({ currentPair, setCurrentIndex, setResultList }) => {
  const choose = (id) => {
    setResultList((items) => items.map((item) => item.id === id ? { ...item, rating: item.rating + 1 } : item));
    setCurrentIndex((index) => index + 1);
  };

  return (
    <div className="d-flex flex-column mb-4">
      <button className="btn btn-light border py-4 text-truncate" type="button"
        title={currentPair[0].text} onClick={() => choose(currentPair[0].id)}>{currentPair[0].text}</button>
      <div className="py-2 text-center text-muted">или</div>
      <button className="btn btn-light border py-4 text-truncate" type="button"
        title={currentPair[1].text} onClick={() => choose(currentPair[1].id)}>{currentPair[1].text}</button>
    </div>
  );
};
