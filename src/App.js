import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Tables from './pages/Tables.jsx';
import Billing from './pages/Billing.jsx';

function App() {
  return (
    <>
     <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  );
}

export default App;
