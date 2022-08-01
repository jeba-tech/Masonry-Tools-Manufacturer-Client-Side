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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
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

        <Route path="/BusinessSummary" element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>



  );
}

export default App;
