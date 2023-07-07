import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import NewsFeed from "../components/NewsFeed";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/home" element={<HomeLayout />}>
        <Route path="" element={<NewsFeed />} />
      </Route>
    </Route>
  )
);
