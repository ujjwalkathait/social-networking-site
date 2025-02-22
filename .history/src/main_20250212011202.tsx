import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <QyeryPro
      <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
  
)