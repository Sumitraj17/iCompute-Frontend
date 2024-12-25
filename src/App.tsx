import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Home } from "@/pages/home/index.tsx";
import { Toaster } from "react-hot-toast"; // Include Toaster for notifications

// Define your application routes
const paths = [
  {
    path: '/',
    element: (<Home />),
  },
];

// Create the browser router instance
const BrowserRouter = createBrowserRouter(paths);

// Main App component
const App = () => {
  return (
    <MantineProvider> {/* Add theming options */}
      <Toaster position="top-right" /> {/* Toast notifications */}
      <RouterProvider router={BrowserRouter} />
    </MantineProvider>
  );
};

export default App;
