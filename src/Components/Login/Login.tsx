import axios from "axios";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from './../Context/AuthContext';

// Define the structure of the login form inputs
interface LoginFormInputs {
  username: string;
  password: string;
}

// Define the structure of the AuthContext
interface AuthContextType {
  saveUserData: () => void;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { saveUserData } = useContext(AuthContext) as AuthContextType;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", data);
      localStorage.setItem("userToken", response?.data?.accessToken);
      saveUserData();
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
      toast("Login successfully");
    } catch (error) {
      toast("Login failed");
      console.error(error);
    }
  };

  return (
    <>
      <div
        id="login"
        className="login-container vh-100 d-flex justify-content-center align-items-center"
      >
        <div className="bg-white rounded p-5 py-5">
          <div className="login-h1 ">
            <h2>User Management System</h2>
          </div>
          <div className="text-center py-3">
            <h4>Sign In</h4>
            <span>Enter your credentials to access your account</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-1">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                {...register("username", { required: "Username is required" })}
              />
              {errors.username && (
                <span className="text-danger">{errors.username.message}</span>
              )}
            </div>
            <div className="my-1">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </div>
            <button className="btn btn-warning sign-btn w-100 text-white mt-3">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
