import React from "react";
import { Button, Form, FormGroup, Label, Input, Container,
  Card, CardBody, Row, Col, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const LoginComponent = ({ state, dispatch, validateData }) => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col sm={{size: 6, offset: 3}} className="mt-5">
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
                         value={state.username} onChange={e => {dispatch({type:'setUserName', playload: e.target.value});dispatch({type:'setUsernameError',playload:null})}} invalid={(state.usernameError !== null)}
                          />
                  <FormFeedback>{state.usernameError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword"
                         placeholder="password placeholder" value={state.password}
                         onChange={e=>{dispatch({type:'setUserPassword', playload: e.target.value});dispatch({type:'setPasswordError',playload:null})}}
                         invalid={(state.passwordError !== null)} />
                  <FormFeedback>{state.passwordError}</FormFeedback>
                </FormGroup>
                <Button onClick={validateData}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginComponent;

LoginComponent.prototype = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  logValues: PropTypes.func.isRequired
}
