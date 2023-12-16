import useInput from "../hook/useInput";

const BasicForm = (props) => {

  const {
    input: firstName,
    inputIsValid: firstNameIsValid,
    inputIsInValid: firstNameIsInValid,
    inputChangeHandler: firstNameChangeHandler,
    onBlurChangeHandler: firstNameBlurChangeHandler,
    reset: resetFirstName
  } = useInput((name) => name.trim() !== "")

  const {
    input: lastName,
    inputIsValid: lastNameIsValid,
    inputIsInValid: lastNameIsInValid,
    inputChangeHandler: lastNameChangeHandler,
    onBlurChangeHandler: lastNameBlurChangeHandler,
    reset: resetLastName
  } = useInput((name) => name.trim() !== "");

  const {
    input: email,
    inputIsValid: emailIsValid,
    inputIsInValid: emailIsInValid,
    inputChangeHandler: emailChangeHandler,
    onBlurChangeHandler: emailBlurChangeHandler,
    reset: resetEmail
  } = useInput((email) => email.includes("@"))
  

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName.trim() === "" || lastName.trim() === "" || !email.includes("@")) {
      return;
    }

    console.log({firstName, lastName, email});
    resetFirstName();
    resetLastName();
    resetEmail()
  }

  const firstNameCheckError = firstNameIsInValid ? "invalid" : ""
  const lastNameCheckError = lastNameIsInValid ? "invalid" : ""
  const emalCheckError = emailIsInValid ? "invalid" : ""
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={`form-control ${firstNameCheckError}`}>
          <label htmlFor='firstName'>First Name</label>
          <input 
             type='text' 
             id='firstName' 
             value={firstName}
             onChange={firstNameChangeHandler}
             onBlur={firstNameBlurChangeHandler}
             />
          {firstNameIsInValid && <p className="error-text">First name input must not be empty</p>}
        </div>
        <div className={`form-control ${lastNameCheckError}`}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' onChange={lastNameChangeHandler} value={lastName} onBlur={lastNameBlurChangeHandler} />
          {lastNameIsInValid && <p className="error-text">Last name input must not be empty</p>}
        </div>
      </div>
      <div className={`form-control ${emalCheckError}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChangeHandler} value={email} onBlur={emailBlurChangeHandler} />
        {emailIsInValid && <p className="error-text">Enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
