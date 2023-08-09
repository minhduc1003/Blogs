import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/auth-context";
import BlogDetail from "./pages/blog/BlogDetail";
import BlogPage from "./pages/blog/BlogPage";
import Contact from "./pages/contact/Contact";
import AddNewPost from "./pages/DashBoard/AddNewPost";
import DashBoard from "./pages/DashBoard/DashBoard";
import DashBoardUser from "./pages/DashBoard/DashBoardUser";
import PostItems from "./pages/DashBoard/PostItems";
import UserEdit from "./pages/DashBoard/UserEdit";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LognIn/LoginPage";
import Page404 from "./pages/Page404";
import SignUpPage from "./pages/SignUp/SignUpPage";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route path="/:slug" element={<BlogDetail></BlogDetail>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
        
        <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/dashBoard" element={<DashBoard></DashBoard>}>
        <Route path="/dashBoard/writenewpost" element={<AddNewPost></AddNewPost>}></Route>
        <Route path="/dashBoard/post" element={<PostItems></PostItems>}></Route>
        <Route path="/dashBoard/user" element={<DashBoardUser></DashBoardUser>}></Route>
        <Route path="/dashBoard/update-user" element={<UserEdit></UserEdit>}></Route>
        </Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
