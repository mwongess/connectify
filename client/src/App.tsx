import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
