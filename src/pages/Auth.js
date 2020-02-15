import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AuthForm from '../components/AuthForm.js';
import InputComponent from '../components/InputComponent';

const Auth = props => {
    return (
        <Container className="vh-100">
            <Row className="justify-content-center vh-100">
                <Col xs="12" sm="10" md="8" lg = "6" className="d-flex align-items-center">
                    { <AuthForm /> }
                    {/* <InputComponent/> */}
                </Col>
            </Row>
        </Container>
    );
}

export default Auth;