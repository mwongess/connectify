import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signin from "../pages/auth/Signin";
// import Signup from "../pages/auth/Signup";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import Profile from "../components/Profile/Profile";
import EditProfile from "../components/settings/EditProfile";
import SettingsLayout from "../layouts/SettingsLayout";
import Home from "../components/Home";
import MessagesLayout from "../layouts/MessagesLayout";
import Community from "../components/Community";
import Explore from "../components/Explore";
import Notifications from "../components/Notification";
import Blocking from "../components/settings/Blocking";
import Password from "../components/settings/Password";
import Language from "../components/settings/Language";
import ReadThread from "../components/ReadThread";
import Signup from "../pages/auth/Signup";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/" element={<HomeLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/read" element={<ReadThread />} />
        <Route path="/community" element={<Community />} />
        <Route path="/messages" element={<MessagesLayout />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="" element={<Profile />} />
        <Route path="settings" element={<SettingsLayout />}>
          <Route path="" element={<EditProfile />} />
          <Route path="blocking" element={<Blocking />} />
          <Route path="password" element={<Password />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="language" element={<Language />} />
        </Route>
      </Route>
    </Route>
  )
);
