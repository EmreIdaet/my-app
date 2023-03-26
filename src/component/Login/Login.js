import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const {onLoginSubmit} = useAuthContext();
    const {values, changeHandler, onSubmit} = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]:''
    }, onLoginSubmit)

    return (
        <section id="login">
            <h1>Login</h1>
            <form method="POST" onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name={LoginFormKeys.Email} value={values[LoginFormKeys.Email]} onChange={changeHandler}></input>

                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler}></input>
                <button type="submit" className="button">Login</button>
            </form>
            <h3>Don't have account? <Link to={'/register'}>Click here.</Link></h3>
        </section>
    )
}