import { BrowserRouter } from "react-router-dom";
import AuthProvider from './contexts/auths';
import Routes from './routes';
import firebase from "./services/firebaseConnection";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
