import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import ToDo from "./ToDo";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToDo />
    </QueryClientProvider>
  );
}

export default App;