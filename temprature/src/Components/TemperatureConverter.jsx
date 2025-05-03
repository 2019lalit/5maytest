import React, { useState } from 'react';

export default function TemperatureConverter() {
  const [inputValue, setInputValue] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [showConverter, setShowConverter] = useState(false); 

  const convertTemperature = () => {
    if (inputValue.trim() === '' || isNaN(inputValue)) {
      setError('Please enter a valid number.');
      setResult('');
      return;
    }

    const temp = parseFloat(inputValue);
    let converted;

    if (unit === 'Celsius') {
      converted = (temp * 9) / 5 + 32;
      setResult(`${converted.toFixed(2)} °F`);
    } else {
      converted = ((temp - 32) * 5) / 9;
      setResult(`${converted.toFixed(2)} °C`);
    }

    setError('');
  };

  const containerStyle = {
    maxWidth: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial',
  };

  return (
    <div style={containerStyle}>
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#007bff',
          fontWeight: 'bold',
          cursor: 'pointer',
          textDecoration: 'underline',
        }}
        onClick={() => setShowConverter(true)} 
      >
        Lalit Singh
      </h2>

      {showConverter && (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter temperature"
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          >
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
          <button
            onClick={convertTemperature}
            style={{
              padding: '10px',
              width: '100%',
              marginTop: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Convert
          </button>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
          {result && <div style={{ marginTop: '15px', fontWeight: 'bold' }}>Converted: {result}</div>}
        </>
      )}
    </div>
  );
}
