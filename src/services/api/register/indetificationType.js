import axios from 'axios';

export const getidentificationType = async () => {
  try {
    const result = await axios.get(
      'http://localhost:5000/api/identificationType'
    );

    return result.data;
  } catch (error) {
    console.log(error);
  }
};
