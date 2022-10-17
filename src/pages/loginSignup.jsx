import './loginSignup.css'
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { createAuthData,postAuthData } from "../Redux/reducers/authReducer";
import Alert from "@mui/material/Alert";
import { useNavigate } from 'react-router-dom';

export const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const [user, setUser] = useState(false);


  //sign up

  const [signUpvalidation, setSignUpvalidation] = useState({
    error: false,
    msg: "",
    show: false,
  });

  const [signUpData, setSingnUpData] = useState({});
  const handleSignUp = () => {
    dispatch(createAuthData(signUpData)).then(({ payload }) => {
      
      if (payload === "success") {
        
          setSignUpvalidation({
            ...signUpvalidation,
            msg: payload,
            show: true,
            error: false,
          });
          setTimeout(()=>{
            setUser(false)
          },1500);
          
          
          return;
        }
      

      setSignUpvalidation({ ...signUpvalidation, msg: payload, show: true, error: true });
      
    });
  };
  

  //login


  const [loginValidation, setLoginValidation] = useState({
    error: false,
    show: false,
  });

  const [loginData, setLoginData] = useState({});
  const handleLogin = () => {
    dispatch(postAuthData(loginData))
    .then(({ payload }) => {

      
      if (payload.status === 200) {
        
          setLoginValidation({
            ...loginValidation,
            show: true,
            error: false,
          }); 
          setTimeout(()=>{

            navigate('/')
           
            
          },1500);
          
          return;
        
      }

      setLoginValidation({ ...loginValidation, show: true, error: true });
    });
  };
  
  


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    p: 4,
  };




  useEffect(()=>{
    setSignUpvalidation({...signUpvalidation,show:false})
    setLoginValidation({...loginValidation,show:false})
  },[signUpData,loginData])
  return (
    <div>
      <Box className="loginSignup-box" sx={style}>
            {user ? (
              <Box>
                <Typography variant="body1" align="right">
                  English(USA)
                </Typography>
                <Typography
                  sx={{ mt: 1, fontWeight: "600", color: "#191919" ,fontStyle:'italic'}}
                  variant='h5'
                  component="h1"
                >
                  Sign up to <span className='loginSignup-heading' >PINION</span>
                </Typography>  
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Already a member?
                  </Typography>

                  <Typography
                    onClick={() => {
                      setUser(false)
                      setLoginValidation({...loginValidation,show:false})
                      setSingnUpData({})}}
                    variant="h6"
                    sx={{ mt: 2, ml: 1, mb: 5, color: "#3B44F6" }}
                  >
                    Log in
                  </Typography>
                </Box>
                <Grid
                  sx={{
                    display: "grid",
                    gap: 3,
                  }}
                >
                  <TextField
                    label="Username"
                    type="text"
                    fullWidth
                    onChange={(e) =>
                      setSingnUpData({ ...signUpData, username: e.target.value })
                    }
                  />
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    onChange={(e) =>
                      setSingnUpData({ ...signUpData, email: e.target.value })
                    }
                  />
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    helperText="Must contain at least  8 characters"
                    onChange={(e) =>
                      setSingnUpData({
                        ...signUpData,
                        password: e.target.value,
                      })
                    }
                  />
                </Grid>

                {signUpvalidation.show ? (
                  <div style={{marginTop:'10px'}}>
                    {signUpvalidation.error ? (
                      <Alert severity="warning">
                        {signUpvalidation.msg}
                      </Alert>
                    ) : (
                      <Alert severity="success">
                        Registration Successfull
                      </Alert>
                    )}
                  </div>
                ) : (
                  <></>
                )}

                <Button
                  onClick={handleSignUp}
                  sx={{ mt: 3, mb: 3, backgroundColor: "#191919" }}
                  color={!signUpvalidation.error?"success":'error'}
                  variant="contained"
                  fullWidth
                  size="large"
                >
                  sign up
                </Button>
              </Box>
            ) : (
              <Box>
                <Typography variant="body1" align="right">
                  English(USA)
                </Typography>

                <Typography
                  sx={{ mt: 1, fontWeight: "600", color: "#191919" ,fontStyle:'italic'}}
                  variant='h5'
                  component="h1"
                >
                  Log in to <span className='loginSignup-heading' >PINION</span>
                </Typography>  
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    New user?
                  </Typography>

                  <Typography
                    
                    onClick={() => {
                      setUser(true)
                      setSignUpvalidation({...signUpvalidation,show:false})}}
                    variant="h6"
                    sx={{ mt: 2, ml: 1, mb: 5, color: "#3B44F6" }}
                  >
                    Sign up
                  </Typography>
                </Box>
                <Grid
                  sx={{
                    display: "grid",
                    gap: 3,
                  }}
                >
                  <TextField

                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    fullWidth
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                  <TextField
                    label="Password"
                    type="Password"
                    autoComplete="current-password"
                    fullWidth
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </Grid>

                {loginValidation.show ? (
                  <div style={{marginTop:'10px'}}>
                    {loginValidation.error ? (
                      <Alert severity="error">
                        Credentials Not Found
                      </Alert>
                    ) : (
                      <Alert severity="success">
                        Login Successfull
                      </Alert>
                    )}
                  </div>
                ) : (
                  <></>
                )}

                <Button
                  sx={{ mt: 3, mb: 3, backgroundColor: "#191919" }}
                  color={!loginValidation.error?"success":'error'}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleLogin}
                >
                  sign in
                </Button>
              </Box>
            )}
          </Box>
    </div>
  );
};