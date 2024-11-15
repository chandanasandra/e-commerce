import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Company Info Section */}
          <Col md={3} className="mb-3">
            <h5 className="text-uppercase">ShopEase</h5>
            <p>Your one-stop destination for a premium shopping experience. Discover our wide range of quality products.</p>
          </Col>

          {/* Products Section */}
          <Col md={3} className="mb-3">
            <h5 className="text-uppercase">Products</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white">Men's Wear</Nav.Link>
              <Nav.Link href="#" className="text-white">Women's Wear</Nav.Link>
              <Nav.Link href="#" className="text-white">Accessories</Nav.Link>
              <Nav.Link href="#" className="text-white">Electronics</Nav.Link>
            </Nav>
          </Col>

          {/* Useful Links Section */}
          <Col md={3} className="mb-3">
            <h5 className="text-uppercase">Useful Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white">Your Account</Nav.Link>
              <Nav.Link href="#" className="text-white">Orders</Nav.Link>
              <Nav.Link href="#" className="text-white">Help Center</Nav.Link>
              <Nav.Link href="#" className="text-white">Privacy Policy</Nav.Link>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col md={3} className="mb-3">
            <h5 className="text-uppercase">Contact</h5>
            <p><i className="fas fa-home"></i> 123 Main Street, New York, NY 10012</p>
            <p><i className="fas fa-envelope"></i> support@shopease.com</p>
            <p><i className="fas fa-phone"></i> +1 234 567 890</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
