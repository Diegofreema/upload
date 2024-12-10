type Props = {
  numPad: string;
  onPress: (val: string) => void;
  displayValue: string;
};

export const NumPads = ({
  numPad,
  onPress,
  displayValue,
}: Props): JSX.Element => {
  const characterToDisplay = () => {
    if (numPad === 'AC' && displayValue !== '0') {
      return 'del';
    }
    return numPad;
  };
  return (
    <div
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 cursor-pointer"
      onClick={() => onPress(numPad)}
    >
      <p className="text-white ">{characterToDisplay()}</p>
    </div>
  );
};
