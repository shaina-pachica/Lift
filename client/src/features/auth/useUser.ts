type User = {
  name: string;
  email: string;
};
export default function useUser(): User {
  const userData = sessionStorage.getItem('user');
  const currentUser = userData ? JSON.parse(userData) : null;
  return currentUser;
}
