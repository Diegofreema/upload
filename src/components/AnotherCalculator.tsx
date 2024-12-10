import { useState } from 'react';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const operations = ['+', '-', '*', '/'];
export const AnotherCalculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operation, setOperation] = useState('');

  // Handle number input
  const handleNumberClick = (number: number) => {
    setDisplay((prevDisplay) =>
      prevDisplay === '0' ? number.toString() : prevDisplay + number
    );
  };

  // Handle operation selection
  const handleOperationClick = (selectedOperation: string) => {
    // Store the first number and selected operation
    setFirstNumber(parseFloat(display));
    setOperation(selectedOperation);
    setDisplay('0');
  };
  const calculateResult = () => {
    const secondNumber = parseFloat(display);
    if (!firstNumber) return;
    let result;

    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result =
          secondNumber !== 0
            ? firstNumber / secondNumber
            : 'Error: Divide by 0';
        break;
      default:
        return;
    }

    // Update display with result
    setDisplay(result.toString());
    setFirstNumber(null);
    setOperation('null');
  };

  const handleClear = () => {
    setDisplay('0');
    setFirstNumber(null);
    setOperation('null');
  };
  return (
    <div className="min-h-screen mx-auto max-w-[300px] p-4 bg-black">
      <div className="bg-gray-100 p-2 text-right text-black text-2xl mb-4 rounded">
        {display}
      </div>

      {/* Number and Operation Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {/* Numbers */}
        {numbers.map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {num}
          </button>
        ))}

        {/* Operations */}
        {operations.map((op) => (
          <button
            key={op}
            onClick={() => handleOperationClick(op)}
            className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
          >
            {op}
          </button>
        ))}

        {/* Equals and Clear */}
        <button
          onClick={calculateResult}
          className="col-span-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          =
        </button>
        <button
          onClick={handleClear}
          className="col-span-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
