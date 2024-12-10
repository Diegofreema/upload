import { useState } from 'react';
import { NumPads } from './NumPads';

type Props = {};

const numPads = [
  'AC',
  '-',
  '+',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '0',
  '.',
  '=',
];
export const Calculator = ({}: Props): JSX.Element => {
  const [displayValue, setDisplayValue] = useState('0');
  const [finalResult, setFinalResult] = useState('0');
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [pressedBtn, setPressedBtn] = useState('');

  const onPress = (btn: string) => {
    if (btn === 'AC' && displayValue !== '0') {
      setDisplayValue((prev) => {
        if (prev.length === 1) {
          return '0';
        }
        return prev.slice(0, -1);
      });
      return;
    }
    if (btn === 'AC') {
      setDisplayValue('0');
      setPressedBtn('');
      setShowFinalResult(false);
      setFinalResult('0');
      return;
    }
    if (btn === '=') {
      setFinalResult(eval(displayValue));
      if (displayValue !== '0') {
        setShowFinalResult(true);
      }
      return;
    }
    setDisplayValue((prev) => {
      if (prev === '0') {
        return btn;
      }
      if (btn === '=' && prev === '0') {
        return prev;
      }
      return prev + btn;
    });
  };

  return (
    <div className="min-h-screen mx-auto max-w-[300px] p-4 bg-black">
      <div
        className={`text-white text-2xl text-right mt-20 w-[90%] ${showFinalResult ? 'opacity-50' : ''}`}
      >
        {displayValue}
      </div>
      {showFinalResult && (
        <div className="text-white text-4xl font-bold text-right  w-[90%]">
          {finalResult}
        </div>
      )}
      <div className="grid grid-cols-4 gap-2 mt-5 mx-auto w-[90%]">
        {numPads.map((numPad, i) => {
          return (
            <NumPads
              key={i}
              numPad={numPad}
              displayValue={displayValue}
              onPress={onPress}
            />
          );
        })}
      </div>
    </div>
  );
};
