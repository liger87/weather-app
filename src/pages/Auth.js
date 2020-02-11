import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
const Auth = props => {
    return (
        <Container className="vh-100">
            <Row className="justify-content-center vh-100">
                <Col xs="6" className="d-flex align-items-center">
                    <div className="w-100 text-center">
                        AUTH FORM
                    </div>
                    <div></div>
                </Col>
            </Row>
        </Container>
    );
}

export default Auth;