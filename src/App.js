
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import MainCarousel from './customer/components/HomeCarousel/mainCarousel';
import HomePage from './customer/components/HomePage/homePage';
import Footer from './customer/components/Footer/footer';
import ProductListingPage from './customer/components/PLP/productListingPage';


function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      {/* <HomePage/> */}
      </div>
      <div>
      <ProductListingPage/>
      </div>
      <div>
       <Footer/>
        </div>
    </div>
  );
}

export default App;
