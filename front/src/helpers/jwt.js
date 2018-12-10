export const getJwt = () => localStorage.getItem('tickAppJwt');
export const setJwt = (token: String) => localStorage.setItem('tickAppJwt', token);
export const removeJwt = () => localStorage.removeItem('tickAppJwt');
