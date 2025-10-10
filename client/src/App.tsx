import { Button } from '@/components/ui/button';

/**
 * Root application component that centers its content and renders a Button labeled "Click me".
 *
 * @returns A JSX element representing the centered app layout
 */
function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
}

export default App;
