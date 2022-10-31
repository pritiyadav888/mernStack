import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

// user components
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
// main pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ListingPage from "./pages/ListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

// protected user pages
import UserCartDetailsPage from "./pages/user/userCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/userOrderDetailsPage";
import UserOrderPage from "./pages/user/userOrderPage";
import UserProfilePage from "./pages/user/userProfilePage";
// protected admin pages
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
// import ScrollTop from "./utilities/ScrollTop.js";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/* publicly available routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/listing" element={<ListingPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details:id" element={<ProductDetailsPage />} />
        </Route>

        {/* simulation for protected user routes */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
          <Route path="/user/my-orders" element={<UserOrderPage />} />
        </Route>

        {/* simulation for protected admin routes */}

        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/chats" element={<AdminChatPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
