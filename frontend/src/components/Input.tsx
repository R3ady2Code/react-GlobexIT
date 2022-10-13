import React from 'react';

interface InputProps {
  value: string;
  setValue: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, setValue }) => {
  return (
    <div className="border border-zinc-200 rounded-3xl py-1 px-4 flex items-center mb-6">
      <input
        className="text-lg w-full outline-none"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="material-symbols-outlined text-purple-600 text-4xl">search</span>
    </div>
  );
};

export default Input;
