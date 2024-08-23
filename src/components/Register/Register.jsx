const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
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
        />
        <br />
        <input
          className="border-2 mb-4 px-4 py-2 w-3/4"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <input
          type="submit"
          value="Register"
          className="btn btn-secondary w-3/4  rounded-none"
        />
      </form>
    </div>
  );
};

export default Register;
