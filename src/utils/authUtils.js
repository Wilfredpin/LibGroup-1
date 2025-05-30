export const getToken = () => localStorage.getItem('token');

export const removeToken = () => localStorage.removeItem('token');

export const setToken = (token) => localStorage.setItem('token', token);

export const logoutUser = (navigate) => {
  localStorage.clear();
  navigate('/');
};

export const validateToken = async () => {
  const token = getToken();
  if (!token) return { valid: false };

  try {
    const response = await fetch('http://localhost:5000/api/validate-token', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return response.ok && data.valid
      ? { valid: true, user: data.user }
      : { valid: false };
  } catch (err) {
    console.error('Token validation failed:', err);
    return { valid: false };
  }
};
