import { useState } from 'react';
import { createEntry } from '../utils';

export const Input = ({entries, setEntries}) => {
  const [text, setText] = useState('');

  const addEntry = () => {
    setEntries(entries = [...entries, createEntry(text)]);
    setText('');
  };

  const handleChange = (e) => setText(e.target.value);

  const handleKeyUp = (e) => e.code === 'Enter' && addEntry();

  const handleClick = () => addEntry();

  return (
    <div className="mb-5">
      <div className="d-flex flex-row">
        <input type="text" value={text} onChange={handleChange} onKeyUp={handleKeyUp} className="form-control mr-1" />
        <button onClick={handleClick} className="btn btn-outline-primary">Добавить</button>
      </div>
    </div>
  );
};
