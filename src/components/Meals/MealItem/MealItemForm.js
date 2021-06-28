import React, {useRef, useState} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [amtIsValid, setAmtIsValid] = useState(true)
  const amountInputRef = useRef()


  const submitHandler = event => {
    event.preventDefault()

    const enteredAmt = amountInputRef.current.value; // string value even if type =number
    if(enteredAmt.trim().length === 0 || +enteredAmt < 1 || +enteredAmt > 5){
      setAmtIsValid(false)
      return;
    }

    props.onAddToCart(+enteredAmt)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount_"+props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amtIsValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
