const API_URL = `https://api.github.com/users`;

export const getUsers = async () => {
  const response = await fetch(API_URL);

  return response.json();
};

export const getCurrentUser = async (login) => {
  const response = await fetch(`${API_URL}/${login}`);

  return response.json();
};
