import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import RegisterForm from "./components/UserForm/RegisterForm"
import UserList from "./components/UserList/userDetails";
import CollegeList from "./components/College/collegeSearch";
import Header from "./components/Header/Header";
//import Footer from "../components/Footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header app_name="User Domain" />
        <Routes>
          <Route
            path="/"
            element={
              <RegisterForm title="Registration" overlap_title="User Details" />
            }
          />
          <Route path="userlist" element={<UserList/>} />
          <Route path="colleges" element={<CollegeList />} />

          <Route path={"*"} element={<Navigate replace to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
