export {}

export const formatCreationDate = (date: string): string => {
    const [day, month, year] = new Date(date).toLocaleDateString().split('/');
    return `${day}.${month}.${year}`;
  };
  