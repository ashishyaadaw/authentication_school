import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginCover, {
  LoginPage,
  PasswordResetPage,
  RegisterPage,
} from "./pages/login/login_cover";
import SetupAccount, {
  BasicInformationSetup,
  FinishSetup,
  PaymentSetup,
  PlanSetup,
} from "./pages/login/set_account";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LoginCover institute_name={"Easy School Management"} />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterPage />
      </>
    ),
  },
  {
    path: "/resetPassword",
    element: (
      <>
        <PasswordResetPage />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <SetupAccount institute_name={"Easy School Management"} />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "basic_information",
        element: (
          <>
            <BasicInformationSetup />
          </>
        ),
      },
      {
        path: "plan_selection",
        element: (
          <>
            <PlanSetup />
          </>
        ),
      },
      {
        path: "payment_option",
        element: (
          <>
            <PaymentSetup />
          </>
        ),
      },
      {
        path: "finish_setup",
        element: (
          <>
            <FinishSetup />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
