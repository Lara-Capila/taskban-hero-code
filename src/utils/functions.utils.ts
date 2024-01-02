export const generateRandomId = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  const prefix = 'task';

  return `${prefix}-${randomNumber}`;
};

export const formatDateToBrazilianFormat = (date: Date) => {
  const dateFormatted = date.toLocaleDateString('pt-BR',
    { day: '2-digit', month: '2-digit', year: 'numeric' }
  );

  return dateFormatted;
};