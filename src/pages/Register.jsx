import { useState } from "react";
import Animation from "../components/Animation";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });




    const navigate = useNavigate()
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  const onChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }

  console.log(values);

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
          <h1 className="text-5xl font-semibold">Register Here</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome! Please enter your details.
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
            <div className="mt-8 flex justify-center">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-violet-700 text-white text-lg font-bold w-full py-3 rounded-xl">
                Sign up
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">Don't have an account ?</p>
              <button className="text-violet-700 font-medium text-base ml-2" onClick={()=>navigate('/')}>
                Sign in
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <Animation />
    </div>
  );
};

export default Register;
