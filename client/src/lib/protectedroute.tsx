import useUser from '@/features/auth/useUser';
import { useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: ReactNode;
};
export default function ProtectedRoute({ children }: Props) {
  const navigate = useNavigate();
  const user = useUser();
  console.log(user);
  useEffect(() => {
    if (!user) navigate('/login', { replace: true });
  }, [user]);
  if (!user) return null;
  return <>{children}</>;
}
