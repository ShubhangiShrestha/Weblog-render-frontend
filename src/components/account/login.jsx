import React, { useState, useEffect, useContext } from 'react';
import { TextField, Box, Button, Typography, styled} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider';
import imgURL from  '../../wLogo.png';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 400,
    height:200,
    display: 'flex',
    margin: 'auto',
    //padding: '10px 0 0'
});

const Wrapper = styled(Box)`
    padding: 15px 25px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 10px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #602060;
    color: #fff;
    height: 48px;
    width:100px;
    margin:auto;
    border-radius: 2px;
`;
const ResetButton = styled(Button)`
    text-transform: none;
    background: #602060;
    color: #fff;
    height: 48px;
    width:160px;
    margin:auto;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #602060;
    height: 38px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    padding-top:5px;
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;



const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    email: '',
    username: '',
    password: '',
};

const gloginInitialValues ={
    sub:'',
    email:'',
    name:'',
    username:'',
};
const enterInitialValues = {
    email:'',
    newPassword:'',
};
const resetInitialValues ={
    email:'',
    otpcode:'',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [glogin,setGoogleLogin]=useState(gloginInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');
    const [mail, setMail] = useState(enterInitialValues);
    const [newPassword,setnewPaassword]=useState(resetInitialValues);

    const navigate = useNavigate();

    const { setAccount } = useContext(DataContext);

    const imageURL = imgURL;

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const onForgotInputChange = (e) => {
        setMail({ ...mail, [e.target.name]: e.target.value});
    }
    ///
    const onResetInputChange = (e) => {
        setnewPaassword({...newPassword, [e.target.name]: e.target.value});
    }
    // Login Using Google
    const onLoginSuccess = async (response) => {
        const decode=jwt_decode(response.credential);
        gloginInitialValues.email=decode.email;
        gloginInitialValues.name=decode.name;
        gloginInitialValues.sub=decode.sub;
        gloginInitialValues.username=decode.given_name;

        let res=await API.userGoogleLogin(glogin);
        if(res.isSuccess){
            showError('');
            sessionStorage.setItem('accessToken', `Bearer ${res.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${res.data.refreshToken}`);
            setAccount({ name: res.data.name, username: res.data.username });

            isUserAuthenticated(true)
            setGoogleLogin(gloginInitialValues);
            navigate('/about');

        }else{
            showError('Something went wrong! please try again later');
        }
    }
    const onLoginError = (response) => {
        console.log("Error while signing",response);
    }

    // Login using login button 
    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/about');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    //Signup the user
    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }
    //Submit Email Id to get otp
    const submitEmail = async () => {
        let response = await API.userForgot(mail);
        if(response.isSuccess){
            showError('');
            setMail(enterInitialValues);
            toggleAccount('reset');
        }
        else{
            showError('Something went wrong! please try again later');
        }
    }
    //Reset password
    const resetPassword = async () => {
        let response = await API.userResetPassword(newPassword);
        if(response.isSuccess){
            showError('');
            setnewPaassword(resetInitialValues);
            toggleAccount('login');
        }else{
            showError('Something went wrong! please try again later');    
        }    
    }


    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
    const toggleForgotPassword = () => {
        account === 'pass' ? toggleAccount('login') : toggleAccount('pass');
    }
    const toggleResetPassword = () => {
        account === 'reset' ? toggleAccount('login') : toggleAccount('reset');
        submitEmail();
    }


    return (
        <Component>
            <Box>
                <Image src={imageURL} alt="weblog" />
                    {
                    account === 'login' ? 
                        <Wrapper>
                            <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            
                            {error && <Error>{error}</Error>}
                            <Button onClick={()=> toggleForgotPassword()} style={{float:'right',fontSize:'11px',marginLeft:'198px'}} >Forgot password?</Button>
                            <LoginButton style={{marginTop:'8px'}} variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                            <Box style={{margin:'auto',marginTop:'15px'}}>
                            <GoogleLogin
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            />
                            </Box>
                        </Wrapper> 
                        :
                        (
                        account === 'signup' ?
                        <Wrapper>
                            <TextField style={{paddingTop:'4px'}} variant="standard" onChange={(e) => onInputChange(e)} name='email' placeholder='Enter Email Id' />
                            <TextField style={{paddingTop:'8px'}} variant="standard" onChange={(e) => onInputChange(e)} name='username' placeholder='Enter Username' />
                            <TextField style={{paddingTop:'8px'}} variant="standard" onChange={(e) => onInputChange(e)} name='password' placeholder='Enter Password' />

                            <SignupButton style={{paddingTop:'5px'}} onClick={() => signupUser()} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" style={{width:'auto'}} onClick={() => toggleSignup()}>Already have an account</LoginButton>
                            <Text><Button onClick={()=>{toggleAccount('login')}} style={{color:'black'}}><ChevronLeftIcon style={{backgroundColor:'#602060',color:'white',borderRadius:'100%'}} /></Button></Text>
                        </Wrapper>
                        :
                        (
                        account === 'pass' ?
                        <Wrapper>
                            <Typography style={{textAlign:'center',fontSize:'20px',fontFamily:'decorative'}}>Enter Email ID and New Password</Typography>
                            <TextField style={{paddingTop:'20px',paddingBottom:'10px'}} variant="standard" onChange={(e) => onForgotInputChange(e)} name='email' placeholder='Enter Email Id' />
                            <TextField style={{paddingTop:'20px',paddingBottom:'10px'}} variant="standard" onChange={(e) => onForgotInputChange(e)} name='newPassword' placeholder='Enter New Password' />
                            <ResetButton variant="contained" onClick={() => toggleResetPassword()} >Send OTP</ResetButton>
                            <Text><Button onClick={()=>{toggleAccount('login')}} style={{color:'black'}}><ChevronLeftIcon style={{backgroundColor:'#602060',color:'white',borderRadius:'100%'}} /></Button></Text>
                        </Wrapper>
                        
                        :
                        <Wrapper>
                            <Typography style={{backgroundColor:'#602060',color:'white' ,textAlign:'center',fontSize:'18px',fontFamily:'decorative'}}>Remove the details if already filled and<Typography display='block' style={{backgroundColor:'#602060',color:'white' ,textAlign:'center',fontSize:'18px',fontFamily:'decorative'}}>Enter Email ID and OTP</Typography></Typography>
                            <TextField style={{paddingTop:'20px',paddingBottom:'10px'}} variant="standard" onChange={(e) => onResetInputChange(e)} name='email' placeholder='Enter Email Id' />
                            <TextField style={{paddingTop:'20px',paddingBottom:'10px'}} variant="standard" onChange={(e) => onResetInputChange(e)} name='otpcode' placeholder='Enter OTP' />
                            <ResetButton variant="contained" onClick={() => resetPassword()} >Submit</ResetButton>

                        </Wrapper>
                        )
                        )
                        }
            </Box>
        </Component>
    )
}

export default Login;

//setMail(enterInitialValues);