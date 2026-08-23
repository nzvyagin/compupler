export const Counter = ({ currentIndex, pairsCount }) => {
  const progress = ((currentIndex + 1) / pairsCount) * 100;
  return (
    <div className="mb-4">
      <div className="text-center text-muted mb-2">{currentIndex + 1} / {pairsCount}</div>
      <div className="progress" role="progressbar" aria-label="Прогресс сравнения"
        aria-valuenow={currentIndex + 1} aria-valuemin="0" aria-valuemax={pairsCount}>
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};
