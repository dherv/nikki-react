import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk/global';
import { User } from '../types/types';

var poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID as string, // Your user pool id here
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID as string, // Your client id here
};

export const login = ({ username, password }: User) => {
  var userPool = new CognitoUserPool(poolData);
  return new Promise((resolve, reject) => {
    var userData = {
      Username: username,
      Pool: userPool,
    };

    var authenticationData = {
      Username: username,
      Password: password,
    };

    var authenticationDetails = new AuthenticationDetails(authenticationData);

    var cognitoUser = new CognitoUser(userData);
    return cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        const accessToken = result.getAccessToken().getJwtToken();
        localStorage.setItem("token", accessToken);
        localStorage.setItem("isAuth", "true");
        //POTENTIAL: Region needs to be set if not already set previously elsewhere.
        AWS.config.region = "ap-northeast-1";

        const credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: process.env.REACT_APP_COGNITO_IDENTITY_POOL_ID!, // your identity pool id here
          Logins: {
            // Change the key below according to the specific region your user pool is in.
            [process.env
              .REACT_APP_COGNITO_ISSUER!]: result.getIdToken().getJwtToken(),
          },
        });

        //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
        credentials.refresh((error) => {
          if (error) {
            console.error(error);
          } else {
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();
            console.log("Successfully logged!");
          }
        });

        resolve(result);
      },

      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
        localStorage.removeItem("isAuth");
        reject(err);
      },
    });
  });
};

export const userDetails = () => {
  var userPool = new CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();
  if (cognitoUser != null) {
    cognitoUser.getSession(function (err: any, session: any) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("session validity: " + session.isValid());
      if (cognitoUser != null) {
        // NOTE: getSession must be called to authenticate user before calling getUserAttributes
        cognitoUser.getUserAttributes(function (err, attributes) {
          if (err) {
            // Handle error
          } else {
            console.log({ attributes });
            // Do something with attributes
          }
        });
      }
    });
  }
};
