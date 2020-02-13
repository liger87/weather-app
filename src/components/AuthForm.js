import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
const AuthForm = (props) => {
    const [isSignUp, setSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState("");

    const setLoginTrue = () => {
        setSignUp(false);
    }
    const setSignUpTrue = () => {
        setSignUp(true);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const register = () => {
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]));
        }

        const users = JSON.parse(localStorage.getItem("users"));
        const user = {
            email,
            pass
        }

        /*const userExists = users.some((existedUser) => existedUser.email === user.email);
        if (!userExists) {
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
        }*/

        console.log( users)
    }

    const login = () => {
        console.log("login");
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        isSignUp ? register() : login();
    }

    return (
        <div className="w-100">
            <h1>{isSignUp ? "SignUp" : "Login"} </h1>
            <Form onSubmit = {handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value = {email} onChange = {handleChangeEmail}type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value = {pass} type="password" placeholder="Password" onChange = {handleChangePass}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
            {isSignUp && <p>If you already have a pass, please
<Button variant="link" onClick = {setLoginTrue}>Log In</Button></p>}
{!isSignUp && <p>If you want to sign up, please
<Button variant="link" onClick = {setSignUpTrue}>Sign Up</Button></p>}
        </div>
    );
}

export default AuthForm;