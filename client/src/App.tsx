import AppLayout from './components/ui/applayout';
import { ThemeProvider } from './lib/ThemeContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Members from './pages/members';
import Checkin from './pages/checkin';
import Payments from './pages/payments';
import Settings from './pages/settings';
export default function App() {
  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        gcTime: 1000 * 60 * 60 * 24,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            element={
              <ThemeProvider>
                <AppLayout />
              </ThemeProvider>
            }
          >
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Members />} path="/members" />
            <Route element={<Checkin />} path="/check-in" />
            <Route element={<Payments />} path="/payments" />
            <Route element={<Settings />} path="/settings" />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
