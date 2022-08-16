export const Counter = ({currentIndex, pairs}) => {
  return (
    <div className="text-center mb-3">
      <span>{++currentIndex}</span>
      <span>/</span>
      <span>{pairs.length}</span>
    </div>
  );
};
