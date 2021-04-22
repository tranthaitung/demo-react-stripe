export const currencyConverter = (amount: string) => {
  const num = Number(amount);
  return num
    .toFixed(0)
    .replace(/./g, (c, i, a) => (i && c !== '.' && (a.length - i) % 3 === 0 ? `.${c}` : c));
};
