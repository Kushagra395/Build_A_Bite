import React, { useState } from 'react'
import './SignLogin.css'
import { useForm } from 'react-hook-form';
import { assets } from '../../assets/frontend_assets/assets';

const SignLogin = ({setShowLogin}) => {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onChange',
  });

 
  console.log('errors:', errors);
  console.log('formState:', formState);

  const onSubmit = async (data) => {
    console.log(data);
    
  };
  const [currState,setCurrState]= useState("Sign Up")
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleButtonClick = () => {
    if (isChecked) {
      console.log('Checkbox is checked');
      // Perform action when checkbox is checked
    } else {
      alert('Checkbox is not checked');
      // Perform action when checkbox is not checked
    }
  };


  return (
    <>
    <div className="SignLogin">
        <div className='changing-content'> 
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
        
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username:</label>
        <input
          type="name"
          {...register('name', { required: true })}
          placeholder="Enter your Name"
        />
        {errors?.name && <p>Username is required</p>}
        {
        currState==="Login"?<></>:
      <>
      <label>Email:</label>
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Enter your email"
        />
        {errors?.email && <p>Email is required</p>}

      </>
      }
        
        <label>Password:</label>
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="Enter your password"
        />
        {errors?.password && <p>Password is required</p>}

        <button  onClick={handleButtonClick} type="button">{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="terms-checkbox">
        <input
            type="checkbox"
            {...register('terms', { required: true })}
            onChange={handleCheckboxChange}
          />
          <label>
            By continuing, I agree to the <a href="#">Terms of Use </a>  and
            <a href="#"> Privacy Policy</a>.
          </label>
          {errors?.terms && <p className="error">Please agree to the terms</p>}
        </div>
        <div>
  {currState==="Login"
    ? (
      <>
        <p>Create a new account? </p>
        <span onClick={()=>setCurrState("Sign Up")}>Click here</span>
      </>
    )
    : (
      <>
        <p>Already have an account? </p>
        <span onClick={()=>setCurrState("Login")}>Login here</span>
      </>
    )
  }
</div>

      </form>
    </div>
    </>
  );
};

export default SignLogin
