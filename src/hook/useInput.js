import { useReducer } from "react";

const reducerFunction = (state, action) => {
    if (action.type === "INPUT") {
        return {
            isTouch: state.isTouch,
            input: action.payload
        }
    } if (action.type === "BLUR") {
        return {
            isTouch: true,
            input: state.input
        }
    } if (action.type === "RESET") {
        return {
            isTouch: null,
            input: ""
        }
    }
    return state
}

const useInput = (checkInputValidity) => {

    const [stateInput, dispatchInput] = useReducer(reducerFunction, {
        isTouch: null,
        input: ""
    })

    // const [input, setInput] = useState("");
    // const [isTouch, setIsTouch] = useState(false);

    // const inputIsValid = checkInputValidity(input);
    // const inputIsInValid = !inputIsValid && isTouch;

    const inputIsValid = checkInputValidity(stateInput.input);
    const inputIsInValid = !inputIsValid && stateInput.isTouch;

    const inputChangeHandler = (e) => {
        // setInput(e.target.value)
        dispatchInput({type: "INPUT", payload: e.target.value})
    };

    const onBlurChangeHandler = () => {
        // setIsTouch(true)
        dispatchInput({type: "BLUR"})
    }

    const reset = () => {
        // setInput("")
        // setIsTouch(false)

        dispatchInput({type: "RESET"})
    };

    return {
        input: stateInput.input,
        inputIsValid,
        inputIsInValid,
        inputChangeHandler,
        onBlurChangeHandler,
        reset
    }
};

export default useInput