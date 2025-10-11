import { LoginForm } from '@/features/auth/loginform';
import { Dumbbell } from 'lucide-react';

export default function Login() {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <a
            href="/login"
            className="flex items-center gap-2 self-center font-medium"
          >
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Dumbbell className="size-4" />
            </div>
            Lift
          </a>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
