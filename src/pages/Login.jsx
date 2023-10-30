import Animation from "../components/Animation";
import { useState } from "react";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      errorMessage: "Should be a valid email Address",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      errorMessage: "",
      placeholder: "Password",
      label: "Password",
      pattern: "",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  console.log(values);

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold">Welcome Back</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter your details.
          </p>
          <div className="mt-8">
            <form>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </form>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex ">
                <input type="checkbox" id="remember" />
                <label
                  className="ml-2 font-medium text-base"
                  htmlFor="remember"
                >
                  Remember for 30 days
                </label>
              </div>
              <button className="font-medium text-base text-violet-700">
                Forgot password
              </button>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-violet-700 text-white text-lg font-bold w-full py-3 rounded-xl"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">Don't have an account ?</p>
              <button
                className="text-violet-700 font-medium text-base ml-2"
                onClick={() => navigate("/register")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Animation />
    </div>
  );
};

export default Login;
