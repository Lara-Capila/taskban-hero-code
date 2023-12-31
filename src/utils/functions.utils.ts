export const generateRandomId = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const prefix = 'task';

  return `${prefix}-${randomNumber}`;
};