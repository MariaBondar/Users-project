const API_URL = `https://api.github.com/users`;

export const getUsers = async (count) => {
  const response = await fetch(`${API_URL}?per_page=${count}`);

  return response.json();
};

export const getCurrentUser = async (login) => {
  const response = await fetch(`${API_URL}/${login}`);

  return response.json();
};
