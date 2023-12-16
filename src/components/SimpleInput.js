
import useInput from "../hook/useInput";

const SimpleInput = (props) => {

  const {
    input: name,
    inputIsValid: nameIsValid,
    inputIsInValid: nameInputIsInvalid,
    inputChangeHandler: nameChangeHandler,
    onBlurChangeHandler: blurChangeHandler,
    reset: resetName
  } = useInput((name) => name.trim() !== "");

  const {
    input: email,
    inputIsValid: emailIsValid,
    inputIsInValid: emailInputIsInValid,
    inputChangeHandler: emailChangeHandler,
    onBlurChangeHandler: onBlurEmailHandler,
    reset: resetEmail
  } = useInput((email) => email.includes("@"))

  let formIsValid = false

    if (nameIsValid && emailIsValid) {
      formIsValid = true
    }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || name.trim() === "" || !email || !email.includes("@")) {
      return;
    }
    
    console.log({name, email});
    resetName();
    resetEmail();
  }

  
  const nameIsvalid = `${nameInputIsInvalid ? "invalid" : ""}` 
  const emailValidClass = `${emailInputIsInValid ? "invalid" : ""}`

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameIsvalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} value={name} onBlur={blurChangeHandler}/>
        {nameInputIsInvalid && <p className="error-text">Name input must not be empty</p>}
      </div>
      <div className={`form-control ${emailValidClass}`}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' onChange={emailChangeHandler} value={email} onBlur={onBlurEmailHandler}/>
        {emailInputIsInValid && <p className="error-text">Email input must include the @ symbol</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
