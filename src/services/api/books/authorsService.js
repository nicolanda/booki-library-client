export const fetcherAuthor = async ({ method, endPoint, body }) => {
  const response = await fetch(
    `http://localhost:5000/api/${endPoint}/`,
    {
      method: `${method}`,
      mode: 'cors',
      cache: 'no-cache',
      body: body ? JSON.stringify(body) : ''
    }
  );

  const jsonData = await response.json();
  return jsonData;
};

// const data = await fetcher({
//   method: 'PUT',
//   endPoint: 'books/id=1355',
//   body: 'nose'
// });
