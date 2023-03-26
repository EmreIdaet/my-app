import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useAuthContext();

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <section id="register">
            <h1>Register</h1>
            <form method="POST" onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={values.email} onChange={changeHandler}></input>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={values.password} onChange={changeHandler}></input>

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirmPassword" value={values.confirmPassword} onChange={changeHandler}></input>

                <button type="submit" className="button">Register</button>
            </form>
            <h3>Have account? <Link to={'/login'}>Click here.</Link></h3>
        </section>
    )
}