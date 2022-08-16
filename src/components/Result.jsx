export const Result = ({resultList}) => {
  const result = [...resultList].sort((a, b) => b.rating - a.rating);

  return (
    <ol className="mb-5">
      {result.map(item => <li key={item.id}>{item.text}</li>)}
    </ol>
  );
};
