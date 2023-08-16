export const formatPopulation = (numberString: string): string => {
  if (!numberString) return "";

  const number = parseInt(numberString, 10);
  if (isNaN(number)) return numberString;

  return number.toLocaleString("en-US");
};
