import {Container, Grid,Button} from '@mui/material'
import * as React from 'react'
import { FC } from 'react'
import {StyledImage,MyTab} from '../../StyledDiv'
import Wedding1 from '../img/3 1.png'
import Birthday from '../img/Birthday.png'
import Engagement from '../img/Engagement.png'
import SaveTheDate from '../img/Save the date.png'
import Wedding from '../img/Wedding.png'
import MuiHeader from '../MuiHeader'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Wedding3 from "../img/girl 1.png";
import page11 from "../img/page1 1.png";
import img31 from "../img/3 1.png";
import Banner from "../img/c60feb2bfd5c1a10cf164d8eb7b20b9b-247-13536 1.png";
import one011 from "../img/one-011.png";
import Modal from '@mui/material/Modal';
import RoomIcon from '@material-ui/icons/Room';
import { useNavigate } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share'
import BackIcon from '@mui/icons-material/ArrowBack'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}

            {...other}
        >
      {value === index && (
          <Box sx={{ p:3}}>
         {children}
        </Box>

      )}
    </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,



    };
}
const CardDetails: FC = () => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        //console.log({newValue})

        // @ts-ignore
       //
       //  let b=document.getElementById(`vertical-tab-${newValue}`).getAttribute('aria-selected')
       //  console.log({b})
       // if(b==='false')
       // {
       //     // @ts-ignore
       //     document.getElementById(`vertical-tab-${newValue}`).style.color="deeppink"
       // }

        //document.querySelector("[aria-selected='true']").style.color="deeppink";

    };
    // @ts-ignore
    // @ts-ignore
    return (

        <>

<MuiHeader/>
<Container sx={{pt:"20px"}}>

            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
            >
      <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 2, borderColor: 'divider',overflow:"visible"}}

      >
        <Tab label="Wedding Cards" {...a11yProps(0)} />
        <Tab label="Wedding Videos" {...a11yProps(1)} />
        <Tab label="Engagement Cards" {...a11yProps(2)} />
        <Tab label="Engagement Videos" {...a11yProps(3)} />
        <Tab label="Haldi Cards" {...a11yProps(4)} />
        <Tab label="Mehandi Cards" {...a11yProps(5)} />

      </Tabs>
      <TabPanel value={value} index={0}>

      <Grid container textAlign="center" justifyContent="center" spacing={2}>

          <Grid item sm={3} position="relative"><StyledImage  onClick={handleOpen} sx={{maxWidth: '100%'}} src={Wedding3}/>

           <Modal
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
           >
        <Box sx={style}>
            <Box >
         <Button onClick={() => handleClose()} sx={{bgcolor:"white!important",color:"black",fontSize:"20px"}}><BackIcon sx={{color:"black"}}/>&nbsp;Back</Button>
            <ShareIcon/>
                </Box>
        <Box display="flex">
 <Grid container textAlign="center" spacing={2} justifyContent="center">
            <Grid item sm={3} sx={{position:"relative"}}>
                <StyledImage  sx={{width:"100%"}} src={Wedding1}></StyledImage>


           </Grid>
             <Grid item sm={3} sx={{position:"relative"}}>
                <StyledImage  sx={{width:"100%"}} src={Wedding1}></StyledImage>


           </Grid>
             <Grid item sm={3} sx={{position:"relative"}}>
                <StyledImage  sx={{width:"100%"}} src={Wedding1}></StyledImage>
                <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
              <Grid item sm={3} sx={{position:"relative"}}>
                <StyledImage  sx={{width:"100%"}} src={Wedding1}></StyledImage>
                <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

        </Grid>
        </Box>
        </Box>
      </Modal>






              <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

             <Grid item sm={3} position="relative" ><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
           <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

        </Grid>

      </TabPanel>
      <TabPanel value={value} index={1}>

      <Grid container textAlign="center" justifyContent="center" spacing={2}>

         <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

             <Grid item sm={3} position="relative" ><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
           <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>


        </Grid>


      </TabPanel>
      <TabPanel value={value} index={2}>

      <Grid container textAlign="center" justifyContent="center" spacing={2}>
 <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

             <Grid item sm={3} position="relative" ><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
           <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>


        </Grid>

      </TabPanel>
      <TabPanel value={value} index={3}>

      <Grid container textAlign="center" justifyContent="center" spacing={2}>

          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

             <Grid item sm={3} position="relative" ><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
           <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

        </Grid>

      </TabPanel>
      <TabPanel value={value} index={4}>

      <Grid container textAlign="center" justifyContent="center" spacing={2}>

          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

             <Grid item sm={3} position="relative" ><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
           <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

        </Grid>

      </TabPanel>
      <TabPanel value={value} index={5}>

      <Grid container textAlign="center" justifyContent="center" spacing={2}>

          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

             <Grid item sm={3} position="relative" ><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
           <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

        </Grid>

      </TabPanel>
      <TabPanel value={value} index={6}>

      <Grid container textAlign="center" justifyContent="center" spacing={2}>

          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

             <Grid item sm={3} position="relative" ><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
          <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
           <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>
             <Grid item sm={3} position="relative"><StyledImage  sx={{maxWidth: '100%'}} src={Wedding3}/> <Box sx={{position:"absolute",top:"16px",left:"16px",color:"#fff",zIndex:"0",py:"10px",pt:"5px",borderTopLeftRadius:"5px"}}>
                    <Box sx={{borderLeft:"105px solid #F450A9",borderBottom:"105px solid transparent",position:"absolute",top:"0",left:"0",zIndex:"-1"}}>
                </Box>
                                    <Typography variant="h6">4</Typography>
                     <Typography>Pages</Typography>
                </Box>

            <Typography><strong><span>₹1,200</span></strong>
                                <del>₹1,500</del></Typography></Grid>

        </Grid>

      </TabPanel>
    </Box>
</Container>


</>
    )

}

export default CardDetails
