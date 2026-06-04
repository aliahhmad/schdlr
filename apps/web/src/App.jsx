import { useAuth } from "react-oidc-context";
import { Toaster } from "react-hot-toast";
import "./styles/App.css";
import { AppRoutes } from "./routes";

function App() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  return (
    <div>
      <AppRoutes />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
