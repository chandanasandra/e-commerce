import React from 'react';
import Navigation from '../customer/components/Navigation/Navigation';
import Footer from '../customer/components/Footer/footer';
import { Routes, Route } from 'react-router-dom';
import ProductListingPage from '../customer/components/PLP/productListingPage';

const UserLayout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        {/* Add more public routes here */}
      </Routes>
      <Footer />
    </div>
  );
};

export default UserLayout;