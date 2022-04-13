//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage';
import HomePageNavBar from './components/HomePageNavBar';
import UplaodImage from './components/UploadImage';
import Catagory from './admin/Catagory';
import Product from './admin/Product';
import AllCatagory from './admin/Allcatagory';
import AllProduct from './admin/AllProduct';
import UpdateProduct from './admin/UpdateProduct';
import GetPassword from './components/GetPassword';
import UpdateCatagory from './admin/UpdateCatagory';
import AllUser from './admin/AllUser';
import ProductList from './components/ProductList';
import Catagories from './components/Catagories';
import ProductDetails from './components/ProductDetails';
import Footer from "./components/Footer";
import Cart from './components/Cart';
import ItemsRemoved from './components/ItemsRemoved';
import OrderDetails from './components/OrderDetails';
import Payment from './components/Payment';
import ConfirmOrder from './components/ConfirmOrder';

function App() {

  

  return (
    <div>
      
      <Router>
        <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/img" component={UplaodImage}/>
          <Route path="/catagory" component={Catagory}/>
          <Route path="/product" component={Product}/>
          <Route path="/allCatagory" component={AllCatagory}/>
          <Route path="/allProduct" component={AllProduct}/>
          <Route path="/updateProduct" component={UpdateProduct}/>
          <Route path="/updateCat" component={UpdateCatagory}/>
          <Route path="/allUser" component={AllUser}/>
          <Route path="/productList" component={ProductList}/>
          <Route path="/catagories" component={Catagories}/>
          <Route path="/productDetails" component={ProductDetails}/>
          <Route path="/cartDetails" component={Cart} />
          <Route path="/item-deleted" component={ItemsRemoved} />
          <Route path="/orderdetails" component={OrderDetails} />
          <Route path="/payment" component={Payment} />
          <Route path="/orderConfirm" component={ConfirmOrder} />
          <Route path="/forgotPassword" component={GetPassword} />
        </Switch>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
      </Router> 
      
    </div>
    
  );
}

export default App;
