import { useState } from 'react';
import { createEntry } from '../utils';

export const Input = ({entries, setEntries}) => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => setText(e.target.value);

  const handleEntryAdd = () => {
    setEntries(entries = [...entries, createEntry(text)]);
    setText('');
  };

  const handleKeyUp = (e) => {
    if(e.code === 'Enter') {
      setEntries(entries = [...entries, createEntry(text)]);
      setText('');
    }
  };

  return (
    <div className="mb-5">
      <div className="d-flex flex-row">
        <input type="text" value={text} onChange={handleTextChange} onKeyUp={handleKeyUp} className="form-control mr-1" />
        <button onClick={handleEntryAdd} className="btn btn-outline-primary">Добавить</button>
      </div>
    </div>
  );
};
