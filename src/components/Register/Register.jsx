import { useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //clear error
    setRegisterError("");
    setRegistrationSuccess("");
    // password validation
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
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
        <input
          className="border-2 mb-4 px-4 py-2 w-3/4"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
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
    </div>
  );
};

export default Register;
