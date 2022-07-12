import { useState } from 'react';

export const Input = ({entries, setEntries}) => {
  const [text, setText] = useState('');

  const createEntry = (text) => {
    return {
      text: text,
      id: 'id_' + text,
      rating: null
    };
  };

  const handleTextChange = (e) => setText(e.target.value);

  const handleEntryAdd = () => {
    const currentValue = text;
    setText('');
    setEntries(entries = [...entries, createEntry(currentValue)]);
  };

  return (
    <div className="mb-5">
      <div className="d-flex flex-row">
        <input type="text" value={text} onChange={handleTextChange} className="form-control mr-1" />
        <button onClick={handleEntryAdd} className="btn btn-outline-primary">Добавить</button>
      </div>
    </div>
  );
};
