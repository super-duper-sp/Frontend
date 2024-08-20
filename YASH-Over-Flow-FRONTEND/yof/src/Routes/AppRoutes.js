import {
    Navigate,
    Route,
    Routes,
    useLocation,
    useNavigate,
  } from "react-router-dom";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import { isTokenExpired } from "../Security/jwt/JwtService";
  import { getDecryption } from "../Security/crypto/EncryptionDecryption";
  import {
    DEFAULT_REQUEST_HEADER_CONTENT_TYPE,
    PUBLIC_URLS,
    TOKEN_KEY,
    USER_ROLES,
  } from "../constants/helperConstants";
  import { logout, syncUserAuthData } from "../features/Auth/AuthAction";
  import { useDispatch, useSelector } from "react-redux";
import { LoginPage } from "../Pages/LoginPage";
import LandingPage from "../Pages/LandingPage";
import { SignupPage } from "../Pages/SignupPage";
import { HomePage } from "../Pages/HomePage";
import Profile from "../Pages/Profile";
import HomeLayout from "../Layout/HomeLayout";

  

  
  export const AppRoutes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { userData } = useSelector((state) => state.auth);
    const [userRole, setUserRole] = useState(null);
  
    useEffect(() => {
      dispatch(syncUserAuthData());
    }, [navigate, dispatch]);
  
    useEffect(() => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        if (isTokenExpired(token)) {
          console.log("Token Expired");
          dispatch(logout());
          navigate("/");
        }
      } else {
        console.log("Token not found");
        if (!PUBLIC_URLS.includes(window.location.pathname)) navigate("/");
      }
    }, [dispatch, navigate]);
  
    useEffect(() => {
      const requestInterceptor = axios.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem(TOKEN_KEY);
          if (token) {
            const decryptedToken = getDecryption(token);
            if (decryptedToken && !isTokenExpired(token)) {
              config.headers["Authorization"] = `Bearer ${decryptedToken}`;
              config.headers["Content-Type"] = config.headers["Content-Type"]
                ? config.headers["Content-Type"]
                : DEFAULT_REQUEST_HEADER_CONTENT_TYPE;
              return config;
            }
          }
          config.headers["Content-Type"] = config.headers["Content-Type"]
            ? config.headers["Content-Type"]
            : DEFAULT_REQUEST_HEADER_CONTENT_TYPE;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
      };
    }, []);
  
    useEffect(() => {
      if (userData.userRole)
        setUserRole(userData.userRole?.substring(5).replace("_", " "));
    }, [userData]);
  
    return (
      <Routes>
        {/*Public Routes*/}
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<SignupPage />} />
   


        {/*---------Adding private routes---------*/}

        <Route path="/home" element={<HomeLayout/>}>
          <Route index element={<HomePage/>} />
          
          {/* <Route path="dashboard" element={<DashboardPage/>} />    
          <Route path="dailytransactons" element={<DailyTransactionPage/>} />  

          <Route path="/settings" element={<SettingsPage />} >
              <Route path="shop" element={<Shop/>}/>
              <Route path="users" element={<User/>} />
          </Route>

          <Route path="settings" element={<SettingsPage/>} />   
          <Route path="analytics" element={<AnalyticsPage/>} />    */}
      </Route>
  
        {/*---------Adding private routes---------*/}
  
        {/*For Technical Manager*/}
        {userRole === USER_ROLES.ADMIN && (
          <>

          <Route path={"/profiles"} element={<Profile/>}/>
            {/* <Route path={"/all-pending-users"} element={<PendingUsers />} />
            <Route path={"/technology-list"} element={<TechnologyList />} />
            <Route
              path={"/all-registered-associates"}
              element={<RegisteredAssoc
                iates />}
            /> */}
            {/* <Route path={"/category-list"} element={<CategoryList />} />
            <Route path={"/addCategory/:id"} element={<CategoryList />} />
            <Route path={"/add-training"} element={<Training />} />
            <Route path={"/all-associates"} element={<AllAssociates />} />
            <Route path={"/associates"} element={<AssociatesList />} />
            <Route path={"/all-trainers"} element={<AllTrainers />} />
            <Route path={"/add-test"} element={<AddTest />} />
            <Route path={"/list-test"} element={<ListTest />} />
            <Route path={"/review-test"} element={<ReviewTest />} />
            <Route path={"/add-question"} element={<AddQuestion />} />
            <Route path={"/assigned-associate"} element={<AssignedAssociateList />} />
            <Route path={"/show-question/:id"} element={<ShowQuestion />} />
            <Route path={"/show-question"} element={<ShowQuestion />} />
            <Route path={"/UpdateQuestion/:id"} element={<UpdateQuestion />} />
            <Route path={"/add-question-test"} element={<AddQuestionTest />} /> */}
          </>
        )}
  
     
  
        {/*For Associates*/}
        {userRole === USER_ROLES.ASSOCIATE && (
          <>
            {/* <Route path={"/my-test/:id"} element={<TestPaper />} />
            <Route path={"/myTrainings"} element={<MyTrainings />} />
            <Route path={"/myTest"} element={<MyTest />} />
            <Route path={"/profile-details"} element={<ProfileDetails />} />
            <Route path={"/test-result"} element={<TestResult />} />
            <Route path={"/starttest/:id"} element={<StartTest />} />
            <Route path={"/reports"} element={"/"} /> */}
          </>
        )}
  
        {/*this should always be kept at last place, keep all the application urls above this one*/}
        {/* Default Route */}
         <Route path={"/*"} element={<Navigate to={"/home"} />} />
      </Routes>
    );
  };
  