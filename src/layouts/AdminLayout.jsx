import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../admin/components/Dashboard/Dashboard';
import OrderDetails from '../admin/components/Order/OrderDetails';
import AdminNavigation from '../admin/components/AdminNavigation/AdminNavigation';

const AdminLayout = () => {
  return (
    <div>
      <AdminNavigation/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orderdetails" element={<OrderDetails/>} />
        {/* Add more admin routes here */}
      </Routes>
    </div>
  );
};

export default AdminLayout;