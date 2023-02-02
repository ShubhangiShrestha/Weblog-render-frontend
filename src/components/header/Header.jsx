import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link } from 'react-router-dom';

const Component = styled(AppBar)`
    background:#000066;
    height:40px;
    color: #ffffff;  
`;

const Container = styled(Toolbar)`
    justify-content:right;
    & > a {
        padding-bottom:20px;
        padding-right:26px;
        color: white;
        text-decoration: none;
    }
`

const Header = () => {
        
    return (
        <Component>
            <Container>
                <p style={{float:'left',paddingRight:'65%',fontSize:'25px',paddingBottom:'20px',color:'white'}}>Weblog</p>
                <Link to='/about'>ABOUT</Link>
                <Link to='/'>HOME</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;