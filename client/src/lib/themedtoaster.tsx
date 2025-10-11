import { Toaster } from 'sonner';
import { Check, X } from 'lucide-react';
import { useTheme } from '@/lib/themecontext';
export default function ThemedToaster() {
  const { theme } = useTheme();
  return (
    <>
      <Toaster
        theme={theme}
        position="bottom-right"
        icons={{
          success: (
            <div className="flex items-center text-primary justify-center w-6 h-6 rounded-full">
              <Check />
            </div>
          ),
          error: (
            <div className="flex items-center text-destructive justify-center w-6 h-6 rounded-full">
              <X />
            </div>
          ),
        }}
      />
    </>
  );
}
