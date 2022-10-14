export const getAllBooks = async () => {
  const response = await fetch('https://api.itbook.store/1.0/new');
  const data = await response.json();
  return data;
};

export const getInfoBook = async (isbn13) => {
  const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`);
  const data = await response.json();
  return data;
};
