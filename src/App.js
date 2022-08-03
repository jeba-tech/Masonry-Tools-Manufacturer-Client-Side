import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import BusinessSummary from './Pages/BusinessSummary/BusinessSummary';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import PurchaseDetails from './Pages/PurchaseDetails/PurchaseDetails';
import Tool from './Pages/Tool/Tool';
import Tools from './Pages/Tools/Tools';
import Contact from './Pages/Home/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="tools" element={<Tools></Tools>} />
        <Route path="myPortfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="purchase/:toolId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        } />
        <Route path="purchaseDetails/:toolId" element={
          <RequireAuth>
            <PurchaseDetails></PurchaseDetails>
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        } >

          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path="/BusinessSummary" element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>



  );
}

export default App;
