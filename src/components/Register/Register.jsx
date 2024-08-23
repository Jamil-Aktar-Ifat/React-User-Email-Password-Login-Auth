import { useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log("Email:", email, "Password:", password, "Checked:", accepted);
    //clear error
    setRegisterError("");
    setRegistrationSuccess("");
    // password validation
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and conditions");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setRegistrationSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="text-center">
      <h2 className="text-3xl text-center">Please Register</h2>
      <form onSubmit={handleSubmit} className=" ">
        <input
          className="border-2 my-4 px-4 py-2 w-3/4"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />
        <br />
        <div className="flex items-center justify-center relative">
          <input
            className="border-2  px-4 py-2 w-3/4"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <span
            className="absolute right-20  md:right-40"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEye> </FaRegEye>
            ) : (
              <FaRegEyeSlash></FaRegEyeSlash>
            )}
          </span>
        </div>
        <br />
        <input className="mb-3" type="checkbox" name="terms" id="terms" />
        <label className="ml-2 mb-4" htmlFor="terms">
          Accept our <a href="http://">Terms and Conditions </a>
        </label>
        <br />
        <input
          type="submit"
          value="Register"
          className="btn btn-secondary w-3/4  rounded-none"
        />
      </form>
      {registerError && <p className="text-red-700 mt-5">{registerError}</p>}
      {registrationSuccess && (
        <p className="text-green-500 mt-5">{registrationSuccess}</p>
      )}
      <p className="my-3">
        Already have an account? Please <Link className="text-blue-600" to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
