import React from "react";
import AppRoutes from "./routes/approutes";
import ErrorBoundary from "./ui/errorboundary";

function App() {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;
