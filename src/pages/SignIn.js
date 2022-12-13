import React from 'react';
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import firebase from 'firebase/app';
import { auth,database } from '../misc/firebase';


const SignIn = () => {

const signInWithProvider = async (provider)=>{
    try {
     const {additionalUserInfo, user} = await auth.signInWithPopup(provider)

     if(additionalUserInfo.isNewUser){
       await database.ref(`/profiles/${user.uid}`).set({
            name: user.displayName,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
        })
     }
     Alert.success("Signed In", 4000)
 } catch (error) {
    Alert.error(error.message, 4000)
 }
}


const onFacebookSignin = ()=>{
    signInWithProvider(new firebase.auth.FacebookAuthProvider())
}
const onGoogleSignin = ()=>{
    signInWithProvider(new firebase.auth.GoogleAuthProvider())
}

  return (
    <Container>
      <Grid className='mt-page'>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center" >
                <h2>Welcome To ChatMania</h2>
                <p>Progressive Chat Application For Smart People</p>
              </div>
              <div className='mt-3'>
                <Button block color="green" onClick={onGoogleSignin}>
                  <Icon icon="google" /> Continue with Google
                </Button>

                <Button block color="blue">
                  <Icon icon="facebook" onClick={onFacebookSignin}/> Continue with Facebook
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
