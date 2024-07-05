import { Route, Routes } from 'react-router-dom';
import ContentPage from './containers/ContentPage/ContentPage';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import AdminForm from './containers/AdminForm/AdminForm';

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ContentPage />} />
          <Route path="/pages/:pageName" element={<ContentPage />} />
          <Route path="/pages/admin" element={<AdminForm />} />
          <Route
            path="*"
            element={<h1 className="text-center">Page not found!</h1>}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
