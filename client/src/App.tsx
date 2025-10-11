import AppLayout from './components/ui/applayout';
import { ThemeProvider } from './lib/themecontext';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/query-core';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Members from './pages/members';
import Checkin from './pages/checkin';
import Payments from './pages/payments';
import Settings from './pages/settings';
import ProtectedRoute from './lib/protectedroute';
import Login from './pages/login';
import ThemedToaster from './lib/themedtoaster';
const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route element={<Dashboard />} path="/dashboard" />
              <Route element={<Members />} path="/members" />
              <Route element={<Checkin />} path="/check-in" />
              <Route element={<Payments />} path="/payments" />
              <Route element={<Settings />} path="/settings" />
            </Route>
            <Route element={<Login />} path="/login" />
          </Routes>
          <ThemedToaster />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
