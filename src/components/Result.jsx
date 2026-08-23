function victoriesLabel(count) {
  const lastTwo = count % 100;
  const last = count % 10;
  if (lastTwo >= 11 && lastTwo <= 14) return 'побед';
  if (last === 1) return 'победа';
  if (last >= 2 && last <= 4) return 'победы';
  return 'побед';
}

export const Result = ({ resultList, onReset }) => {
  const result = [...resultList].sort((a, b) => b.rating - a.rating);
  return (
    <section aria-labelledby="result-title">
      <div className="text-center mb-4">
        <div className="text-success fw-semibold mb-2">Сравнение завершено</div>
        <h2 id="result-title">Ваш рейтинг</h2>
      </div>
      <ol className="list-group list-group-numbered mb-4">
        {result.map((item) => (
          <li className="list-group-item d-flex justify-content-between align-items-center gap-3" key={item.id}>
            <span className="ms-2 me-auto text-break">{item.text}</span>
            <span className="badge bg-primary rounded-pill">{item.rating} {victoriesLabel(item.rating)}</span>
          </li>
        ))}
      </ol>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary" type="button" onClick={onReset}>Начать заново</button>
      </div>
    </section>
  );
};
