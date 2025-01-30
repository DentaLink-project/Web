// InputField.js
import React from 'react';

const InputField = ({ placeholder = '', type, value, onChange, name, error }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        onChange={onChange} 
        value={value}
        name={name}
        placeholder={placeholder}
        className={`w-80 px-5 py-2 border-2 ${error ? 'border-red-500' : 'border-gray-300'} rounded-xs`}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
