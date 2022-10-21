import { useState } from 'react';
import { createEntries } from '../utils';

export const Input = ({entries, setEntries}) => {
  const [text, setText] = useState('');

  const addEntry = () => {
    text && setEntries(entries = [...entries, ...createEntries(text)]);
    setText('');
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData('text');

    /[\r\n]+/g.test(pastedData)
      ? setText(pastedData.replace(/(?<=.)[\r\n]+(?![\r\n]+)(?=.)/g, ', '))
      : setText(pastedData);
  };

  const handleChange = (e) => setText(e.target.value);

  const handleKeyUp = (e) => e.code === 'Enter' && addEntry();

  const handleClick = () => addEntry();

  return (
    <div className="mb-5">
      <div className="d-flex flex-row">
        <input type="text" value={text} onChange={handleChange} onKeyUp={handleKeyUp} onPaste={handlePaste} className="form-control mr-1" />
        <button onClick={handleClick} className="btn btn-outline-primary">Добавить</button>
      </div>
    </div>
  );
};
