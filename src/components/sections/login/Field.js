import React from 'react';

function Field({type, label, placeholder}) {
  return (
      <div className="form-group mt-3">
        <label>{label}</label>
        <input
            type={type}
            className="form-control mt-1"
            placeholder={placeholder}
        />
      </div>
  );
}

export default Field;