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
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/EditProfile";
import SettingsLayout from "../layouts/SettingsLayout";
import Home from "../components/Home";
import MessagesLayout from "../layouts/MessagesLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* <Route path="/" /> */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/" element={<HomeLayout />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/messages" element={<MessagesLayout/>} />
        <Route path="" element={<Profile />} />
        <Route path="settings" element={<SettingsLayout/>}>
            <Route path="" element={<EditProfile/>}/>
        </Route>
      </Route>
    </Route>
  )
);
