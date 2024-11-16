import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          {/* Public Layout */}
          <Route path="/*" element={<UserLayout />} />

          {/* Admin Layout */}
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
