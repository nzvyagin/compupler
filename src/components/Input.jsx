import { useState } from 'react';
import { createEntries } from '../utils.js';

export const Input = ({ setEntries }) => {
  const [text, setText] = useState('');

  const addEntries = () => {
    const newEntries = createEntries(text);
    if (!newEntries.length) return;
    setEntries((entries) => [...entries, ...newEntries]);
    setText('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEntries();
  };

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData('text');
    if (!/\r|\n/.test(pastedText)) return;
    event.preventDefault();
    setText(pastedText.split(/\r?\n/).filter(Boolean).join(', '));
  };

  return (
    <form className="input-group mb-4" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="entry-input">Варианты для сравнения</label>
      <input id="entry-input" className="form-control" type="text" value={text}
        placeholder="Введите один или несколько вариантов" autoComplete="off"
        onChange={(event) => setText(event.target.value)} onPaste={handlePaste} />
      <button className="btn btn-outline-primary" type="submit" disabled={!text.trim()}>Добавить</button>
    </form>
  );
};
