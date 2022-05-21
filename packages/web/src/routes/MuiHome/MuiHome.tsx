import {Box, Button, Link, Container, Typography, Grid, createTheme,ThemeProvider} from '@mui/material'
import { FC, useEffect } from 'react'

import * as React from 'react';
import useLoginApi from '../../api/useLoginApi'
import {ILoginRequest} from '../../types/auth'
import translate from '../img/Group1.png'
import MuiHeader from '../MuiHeader'
import {StyledImage} from '../../StyledDiv'

import back from "../img/back.png";
import next from "../img/next.png";
// @ts-ignore
import  SwipeableViews from 'react-swipeable-views';
// @ts-ignore
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';


import Banner from "../img/c60feb2bfd5c1a10cf164d8eb7b20b9b-247-13536 1.png";
import Wedding from "../img/Wedding.png";
import Engagement from "../img/Engagement.png";
import Birthday from "../img/Birthday.png";
import SaveTheDate from "../img/Save the date.png";
import Wedding1 from "../img/3 1.png";
import Wedding2 from "../img/page1 1.png";
import Wedding3 from "../img/girl 1.png";
import useCardDetails from '../../api/useCardDetails'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const theme = createTheme({
    typography: {
        fontFamily: ["Baloo", "cursive"].join(",")
    }
});



const MuiHome: FC = () => {

    const {
        isLoading, isSuccess,
        isError,
        data
    } = useCardDetails()
    console.log({data})

    const [textValue, setTextValue] = React.useState<any>(data);
    console.log({textValue})

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 4;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = () => {
        setActiveStep(4);
    };


    return (
        <>
        <MuiHeader/>

        <Container sx={{py: "30px"}}>
            {/*<AutoPlaySwipeableViews*/} {/*    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}*/} {/*    index={activeStep}*/} {/*    onChangeIndex={handleStepChange}*/} {/*    enableMouseEvents*/} {/*>*/}
            <Grid container sx={{backgroundColor: "#C59FAC", borderRadius: "10px"}}>

  <Grid item sm={4} sx={{pt: "40px"}}>
       <ThemeProvider theme={theme}>
    <Typography variant="h4" sx={{display: "flex", justifyContent: "flex-end"}} color="white">Shop Wedding <br/>
                                       Invitation<br/>
                                          E-Cards</Typography></ThemeProvider>
  </Grid>
     <Grid item sm={8} sx={{pt: "40px"}}>
    <StyledImage sx={{maxWidth: "100%"}} src={Banner}></StyledImage>
  </Grid>

</Grid> {/*                <Grid container  sx={{backgroundColor:"#C59FAC",borderRadius:"10px"}}>*/}

            {/*  <Grid item sm={4} sx={{pt:"40px"}}>*/} {/*       <ThemeProvider theme={theme}>*/} {/*    <Typography variant="h4" sx={{display:"flex",justifyContent: "flex-end"}} color="white">Shop Wedding <br />*/} {/*                                       Invitation<br/>*/} {/*                                          E-Cards</Typography></ThemeProvider>*/} {/*  </Grid>*/} {/*     <Grid item sm={8} sx={{pt:"40px"}}>*/} {/*    <StyledImage  sx={{maxWidth:"100%"}} src={Banner}></StyledImage>*/} {/*  </Grid>*/}

            {/*</Grid>*/} {/*                <Grid container  sx={{backgroundColor:"#C59FAC",borderRadius:"10px"}}>*/}

            {/*  <Grid item sm={4} sx={{pt:"40px"}}>*/} {/*       <ThemeProvider theme={theme}>*/} {/*    <Typography variant="h4" sx={{display:"flex",justifyContent: "flex-end"}} color="white">Shop Wedding <br />*/} {/*                                       Invitation<br/>*/} {/*                                          E-Cards</Typography></ThemeProvider>*/} {/*  </Grid>*/} {/*     <Grid item sm={8} sx={{pt:"40px"}}>*/} {/*    <StyledImage  sx={{maxWidth:"100%"}} src={Banner}></StyledImage>*/} {/*  </Grid>*/}

            {/*</Grid>*/} {/*                <Grid container  sx={{backgroundColor:"#C59FAC",borderRadius:"10px"}}>*/}

            {/*  <Grid item sm={4} sx={{pt:"40px"}}>*/} {/*       <ThemeProvider theme={theme}>*/} {/*    <Typography variant="h4" sx={{display:"flex",justifyContent: "flex-end"}} color="white">Shop Wedding <br />*/} {/*                                       Invitation<br/>*/} {/*                                          E-Cards</Typography></ThemeProvider>*/} {/*  </Grid>*/} {/*     <Grid item sm={8} sx={{pt:"40px"}}>*/} {/*    <StyledImage  sx={{maxWidth:"100%"}} src={Banner}></StyledImage>*/} {/*  </Grid>*/}

            {/*</Grid>*/}


            {/*</AutoPlaySwipeableViews>*/}

            {/*<MobileStepper*/} {/*    steps={maxSteps}*/} {/*    position="static"*/} {/*    activeStep={activeStep}*/} {/*    nextButton={*/} {/*        <Button*/} {/*            size="small"*/} {/*            onClick={handleNext}*/} {/*            disabled={activeStep === maxSteps - 1}*/} {/*        >*/} {/*Next*/} {/*            {theme.direction === 'rtl' ? (*/} {/*                <KeyboardArrowLeft  sx={{color:"white"}}/>*/} {/*            ) : (*/} {/*                <KeyboardArrowRight sx={{color:"white"}}/>*/} {/*            )}*/} {/*</Button>*/} {/*      }*/} {/*      backButton={*/} {/*          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>*/} {/*  {theme.direction === 'rtl' ? (*/} {/*      <KeyboardArrowRight sx={{color:"white"}} />*/} {/*  ) : (*/} {/*      <KeyboardArrowLeft sx={{color:"white"}} />*/} {/*  )}*/} {/*              Back*/} {/*</Button>*/} {/*      }*/} {/*  />*/}

        </Container>


    <Container>
        <Box display="flex" justifyContent="space-between" sx={{
            pt: "30px",
            pb: "10px"
        }}><Typography variant="h5" sx={{fontWeight: "500"}}>Categories</Typography>
            <Link href="#" sx={{fontWeight: "bold", textDecoration: "none", color: "#9505F9"}}>See All</Link></Box>
        <Grid container textAlign="center" justifyContent="center">
{/*{data?.map((val:any,index:number)=>{*/} {/*    */} {/*})}*/}
{/*            {data?.map(())}*/}
            <Grid item sm={3}><StyledImage sx={{maxWidth: "100%"}} src={Wedding}></StyledImage>
                <Typography variant="h6">Wedding</Typography></Grid>

            <Grid item sm={3} ><StyledImage  sx={{maxWidth:"100%"}} src={Engagement}></StyledImage><Typography variant="h6">Engagement</Typography></Grid> <Grid item sm={3} ><StyledImage  sx={{maxWidth:"100%"}} src={Birthday}></StyledImage><Typography variant="h6">Birthday</Typography></Grid> <Grid item sm={3}><StyledImage  sx={{maxWidth:"100%"}} src={SaveTheDate}></StyledImage><Typography variant="h6">Save The Date</Typography></Grid>

        </Grid>
    </Container>



    <Container>
        <Box display="flex" justifyContent="space-between" sx={{pt: "30px", pb: "10px"}}>
            <Typography variant="h5" sx={{fontWeight: "500"}}>Wedding Invitations</Typography>
            <Link href="#" sx={{fontWeight: "bold", textDecoration: "none", color: "#9505F9"}}>See All</Link>
        </Box>
        <Grid container textAlign="center" spacing={2} justifyContent="center">
            <Grid item sm={3} sx={{position: "relative"}}>
                <StyledImage sx={{width: "100%"}} src={Wedding1}></StyledImage>
                <Box sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#fff",
                    zIndex: "0",
                    py: "10px",
                    pt: "5px",
                    borderTopLeftRadius: "5px"
                }}>
                    <Box sx={{
                        borderLeft: "105px solid #F450A9",
                        borderBottom: "105px solid transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "-1"
                    }}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} sx={{position: "relative"}}>
                <StyledImage sx={{width: "100%"}} src={Wedding1}></StyledImage>
                <Box sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#fff",
                    zIndex: "0",
                    py: "10px",
                    pt: "5px",
                    borderTopLeftRadius: "5px"
                }}>
                    <Box sx={{
                        borderLeft: "105px solid #F450A9",
                        borderBottom: "105px solid transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "-1"
                    }}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} sx={{position: "relative"}}>
                <StyledImage sx={{width: "100%"}} src={Wedding1}></StyledImage>
                <Box sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#fff",
                    zIndex: "0",
                    py: "10px",
                    pt: "5px",
                    borderTopLeftRadius: "5px"
                }}>
                    <Box sx={{
                        borderLeft: "105px solid #F450A9",
                        borderBottom: "105px solid transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "-1"
                    }}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
              <Grid item sm={3} sx={{position: "relative"}}>
                <StyledImage sx={{width: "100%"}} src={Wedding1}></StyledImage>
                <Box sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#fff",
                    zIndex: "0",
                    py: "10px",
                    pt: "5px",
                    borderTopLeftRadius: "5px"
                }}>
                    <Box sx={{
                        borderLeft: "105px solid #F450A9",
                        borderBottom: "105px solid transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "-1"
                    }}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

        </Grid>


    </Container>




    <Container>
        <Box display="flex" justifyContent="space-between" sx={{
            pt: "30px",
            pb: "10px"
        }}><Typography variant="h5" sx={{fontWeight: "500"}}>Engagement Invitations</Typography>
            <Link href="#" sx={{fontWeight: "bold", textDecoration: "none", color: "#9505F9"}}>See All</Link></Box>
        <Grid container textAlign="center" justifyContent="center" spacing={2}>
            <Grid item sm={3} sx={{position: "relative"}}>
                <StyledImage sx={{width: "100%"}} src={Wedding1}></StyledImage>
                <Box sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#fff",
                    zIndex: "0",
                    py: "10px",
                    pt: "5px",
                    borderTopLeftRadius: "5px"
                }}>
                    <Box sx={{
                        borderLeft: "105px solid #F450A9",
                        borderBottom: "105px solid transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "-1"
                    }}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} sx={{position: "relative"}}>
                <StyledImage sx={{width: "100%"}} src={Wedding1}></StyledImage>
                <Box sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#fff",
                    zIndex: "0",
                    py: "10px",
                    pt: "5px",
                    borderTopLeftRadius: "5px"
                }}>
                    <Box sx={{
                        borderLeft: "105px solid #F450A9",
                        borderBottom: "105px solid transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "-1"
                    }}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} sx={{position: "relative"}}>
                <StyledImage sx={{width: "100%"}} src={Wedding1}></StyledImage>
                <Box sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#fff",
                    zIndex: "0",
                    py: "10px",
                    pt: "5px",
                    borderTopLeftRadius: "5px"
                }}>
                    <Box sx={{
                        borderLeft: "105px solid #F450A9",
                        borderBottom: "105px solid transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "-1"
                    }}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
              <Grid item sm={3} sx={{position: "relative"}}>
                <StyledImage sx={{width: "100%"}} src={Wedding1}></StyledImage>
                <Box sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    color: "#fff",
                    zIndex: "0",
                    py: "10px",
                    pt: "5px",
                    borderTopLeftRadius: "5px"
                }}>
                    <Box sx={{
                        borderLeft: "105px solid #F450A9",
                        borderBottom: "105px solid transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "-1"
                    }}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>



        </Grid>
    </Container>
    </>

    )


}

export default MuiHome
