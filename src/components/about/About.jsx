import { Box, Button, styled, Typography,Grid} from '@mui/material';
import { Link } from 'react-router-dom';
//import { GitHub, Instagram, Email } from '@mui/icons-material'; 
import penPaper from '../../penPaper.jpg';
import foodBlog from '../../foodBlog.jpg';
import familyBlog from '../../familyBlog.jpg';
import reel from '../../reel.jpg';
import mobileLaptop from '../../mobileLaptop.jpg';

const Wrapper = styled(Box)`
 
`;

const Wrap = styled(Box)`
    height:400px;
    width: 100%;
`;
const Image = styled('img')({
    height:250,
    paddingTop:60,
    opacity:0.6,
});
const Image1 = styled('img')({
    height:150,
    paddingTop:210,
    opacity:0.4,
});
const Image21 = styled('img')({
    height:300,
    paddingLeft:50,
    paddingTop:30,
    opacity:0.7,
});
const Image31 = styled('img')({
    height:200,
    paddingLeft:50,
    paddingTop:30,
    opacity:0.7,
});
const Image32 = styled('img')({
    height:100,
    paddingTop:200,
    opacity:0.7,
});
const Footer = styled(Box)`
    background:black;
    height:200px;
`;
const About = () => {

    return (
            <Wrapper>
                <Wrap style={{backgroundColor:'#000066'}}>
                    <Grid container>
                        <Grid item lg={3} xs={3} sm={3}>
                            <Image src={mobileLaptop} />
                        </Grid>
                        <Grid item lg={6} xs={6} sm={6} style={{textAlign:'center'}}>
                            <Typography style={{textAlign:'center',color:'white',paddingTop:'50px',fontSize:'40px',fontFamily:'decorative'}}>
                                Publish your Passion<Typography display="block" style={{textAlign:'center',color:'white',fontSize:'25px',fontFamily:'decorative'}}>Express yourself and communicate around the globe</Typography>
                            </Typography>
                            <Box style={{textAlign:'center',paddingTop:'80px'}}>
                                <Button style={{backgroundColor:'white',fontSize:'16px',color:'black',fontFamily:'decorative',padding:'10px',boxShadow:'0 6px 12px 0 white'}}>
                                    <Link style={{textDecoration:'none',color:'black'}} to='/'>Get  Started</Link>
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item lg={3} xs={3} sm={3} style={{textAlign:'center'}}>
                            <Image1 src={penPaper} />
                        </Grid>

                    </Grid>
                    
                </Wrap> 
                <Wrap style={{backgroundColor:'#005580'}}>
                <Grid container>
                    <Grid item lg={6} xs={6} sm={6}>
                        <Typography style={{color:'white',fontFamily:'decorative',marginLeft:'130px',paddingTop:'80px',fontSize:'40px'}}>
                        Choose the suitable<Typography display="block" style={{fontSize:'40px',fontFamily:'decorative'}}> category</Typography>
                         </Typography>
                         <Typography style={{color:'white',fontFamily:'decorative',marginLeft:'130px',paddingTop:'30px',fontSize:'20px'}}>
                        Select your type and create a <Typography display="block" style={{fontSize:'20px',fontFamily:'decorative'}}>beautiful blog that fits your style.</Typography>
                         </Typography>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6} style={{textAlign:'center'}}>
                        <Image21 src={foodBlog} />
                    </Grid>
                </Grid>
                </Wrap>
                <Wrap style={{backgroundColor:'#800000'}}>
                <Grid container>
                    <Grid item lg={6} xs={6} sm={6}>
                        <Typography style={{color:'white',fontFamily:'decorative',marginLeft:'130px',paddingTop:'80px',fontSize:'40px'}}>
                        Hang onto your<Typography display="block" style={{fontSize:'40px',fontFamily:'decorative'}}>memories</Typography>
                         </Typography>
                         <Typography style={{color:'white',fontFamily:'decorative',marginLeft:'130px',paddingTop:'30px',fontSize:'20px'}}>
                         Save the moments that matter and safely store<Typography display="block" style={{fontSize:'20px',fontFamily:'decorative'}}>thousands of posts, photos, and more with us.</Typography>
                         </Typography>
                    </Grid>
                    <Grid item lg={6} xs={6} sm={6} style={{textAlign:'center'}}>
                        <Image31 src={familyBlog} />
                        <Image32 src={reel} />
                    </Grid>
                </Grid>
                </Wrap>
                <Footer>
                    <Grid container>
                        <Grid item lg={6} xs={6} sm={6}>
                        <Typography style={{color:'white',paddingTop:'40px',paddingLeft:'40px',paddingBottom:'20px',fontSize:'30px'}}><u>ABOUT US</u></Typography>
                        <Typography style={{color:'white',paddingLeft:'40px',fontSize:'18px'}}>Blogging is the act of content creation to inform, educate about any topic on the internet. On Weblog 
                            you can spread your ideas and know other's ideas and gain knowledge.</Typography>
                        </Grid>
                        <Grid item lg={6} xs={6} sm={6}>
                            <Typography style={{color:'white',paddingTop:'40px',paddingLeft:'60px',paddingBottom:'20px',fontSize:'30px'}}><u>CONTACT</u> :-</Typography>
                            <Button style={{backgroundColor:'#000066',marginLeft:'60px'}}>
                            <a href="https://www.facebook.com/shubhangi.shrestha" target='_blank' rel='noopener noreferrer'><i class="fa fa-facebook" style={{textDecoration:'none',color:'white',fontSize:'25px'}}></i></a>
                            </Button>
                            <Button style={{backgroundColor:'#b20094',marginLeft:'40px'}}>
                            <a href="https://instagram.com/shubhangishrestha" target='_blank' rel='noopener noreferrer'><i class="fa fa-instagram" style={{textDecoration:'none',color:'white',fontSize:'25px'}}></i></a>
                            </Button>
                            <Button style={{backgroundColor:'#3333ff',marginLeft:'40px'}}>
                            <a href="https://www.linkedin.com/in/shubhangi-shrestha-3718911aa" target='_blank' rel='noopener noreferrer'><i class="fa fa-linkedin" style={{textDecoration:'none',color:'white',fontSize:'25px'}}></i></a>
                            </Button>
                        </Grid>
                    </Grid>
                </Footer>
            </Wrapper>
            
    )
}

export default About;
//#5c5cd6
/*<Typography variant="h4">Shubhangi Shrestha</Typography>
                <Text variant="h5">I am Shubhangi Shrestha and I'm currently
                pursuing B.Tech from Netaji Subhash Engineering College in Computer Science and Engineering.
                I am a very quick learner and also I am highly trainable. I am enthusiastic, positive,
                 and passionate about work. I have done varoius projects on web development and I want to be a Software Developer.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>*/

                //style={{marginTop:'60px'}}
                /*padding:0px;
    & > h3, & > h5 {
        margin-top: 0px;
    }*/