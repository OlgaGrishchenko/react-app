import React, { useState, useRef, useEffect } from "react";
import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, {ButtonTypes} from "../../Components/Button";

//@ts-ignore
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {

   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')

   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
   
   return (
      <FormContainer title={"Reset password"}>
            <>
            <div className={styles.containerDesc}>
               You will receive an email <span>example@gmail.com.</span> with a link to reset your password!
            </div>

            <div className={styles.inputsContainer}>
               <Input
                  title={"Email"}
                  value={login}
                  onChange={(value) => setLogin(value)}
                  placeholder={"Your email"}
                  ref={inputRef}
               />
            </div>

               <Button
          className={styles.button}
          title={"Go to home"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
        />
            </>
        </FormContainer>
    );
};

export default ResetPassword;