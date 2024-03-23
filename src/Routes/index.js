import { PATH } from "../Utils/Constant"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import ForgotPass from "../Components/ForgotPass"
import OtpVerification from "../Components/ForgotPass/OtpVerification"

export const RouteList = [
    {
        name: 'Login',
        path: PATH.login,
        element: <Login />,
        authRequired: false
    },
    {
        name: 'Signup',
        path: PATH.signup,
        element: <Signup />,
        authRequired: false
    },
    {
        name: 'Forgot Password',
        path: PATH.forgotPass,
        element: <ForgotPass />,
        authRequired: false
    },
    {
        name: 'OTP Verification',
        path: PATH.otpVerification,
        element: <OtpVerification />,
        authRequired: false
    },
]