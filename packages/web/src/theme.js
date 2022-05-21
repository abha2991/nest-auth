import {Button, createTheme, ThemeProvider} from "@mui/material"
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: { minWidth: 0 }
      }
    }
  }

  // grid: {
  //   secondary: {
  //     main: '#415c1d'
  //   },
  // },
  // components: {
  //   MuiButton: {
  //     // styleOverrides: {
  //     //   root: {
  //     //     borderRadius: 30,
  //     //     padding: 8,
  //     //    backgroundColor:"pink",
  //     //     width:'50px'
  //     //
  //     //
  //     //   }
  //     // }
  //
  //     // variants: [
  //     //   {
  //     //     props: { variant: "bold" },
  //     //     style: {
  //     //       fontWeight: "bold",
  //     //       border: `4px solid black`,
  //     //       color: "orange"
  //     //     }
  //     //   }
  //     // ]
  //   }
  // }
});


// const theme = createTheme({
//   root: {
//     padding:"5px",
//     border: '1px solid rgba(0, 0, 0, 0.1)' ,
//     borderRadius:"5px",
//     marginBottom:"10px",
//     marginRight:"3px",
//     [theme.breakpoints.up('sm')]: {
//       marginRight:"0px"
//     },
//
//   },
// });


export default theme
