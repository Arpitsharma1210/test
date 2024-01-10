import { createTheme } from '@mui/material/styles';
import { brand, colors } from "./style.palette";
import { baseFontFamily, fontSize, fontWeight } from "./style.typography";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (up to 767px)
      sm: 768, // Small devices (768px and up)
      md: 1024, // Medium devices (1024px and up)
      lg: 1600, // Large devices (1600px and up)
      xl: 1921, // Extra large devices (1920px and up)
    },
  },
  typography: {
    fontFamily: baseFontFamily,
    h1:{
      fontSize : fontSize.h1,
      fontWeight : fontWeight.bold
    },
    h2:{
      fontSize : fontSize.h2,
      fontWeight : fontWeight.bold
    },
    h3:{
      fontSize : fontSize.h3,
      fontWeight : fontWeight.bold
    },
    h4:{
      fontSize : fontSize.h4,
      fontWeight : fontWeight.medium
    },
    h5:{
      fontSize : fontSize.h5,
      fontWeight : fontWeight.semiBold
    },
    h6:{
      fontSize : fontSize.h6,
      fontWeight : fontWeight.medium
    },
    body1:{
      fontSize : fontSize.b1,
      fontWeight : fontWeight.regular
    },
    body2:{
      fontSize : fontSize.b2,
      fontWeight : fontWeight.regular
    },
    subtitle1:{
      fontSize : fontSize.b1,
      fontWeight : fontWeight.bold
    },
    subtitle2:{
      fontSize : fontSize.b1,
      fontWeight : fontWeight.semiBold
    },
  },
  palette: {
    primary: {
      main: brand.primaryMain,
    },
    secondary: {
      main: brand.secondaryMain,
    },
    error: {
      main : colors.danger
    }
  },
  shape: {
    borderRadius: 5,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          margin: '0px',
          padding: '8px 16px',
          fontFamily:baseFontFamily,
          fontSize: fontSize.b1,
          fontWeight: fontWeight.bold,
          borderRadius : 10,
          boxShadow : 'none',
          '&.Mui-disabled':{
            color: colors.grey100,
            background: colors.grey10
          },
        },
        sizeSmall : {
          padding: '4px 8px',
          fontSize: fontSize.b2,
          fontWeight: fontWeight.regular,
          borderRadius : 8,
        },
        outlinedPrimary: {
          borderRadius : 10,
          borderColor:colors.grey10,
          color:colors.grey10,
          background: 'inherit',
          '&:hover':{
            borderColor:colors.grey10,
            background: 'inherit',
            boxShadow : 'none',
          },
        },
        containedPrimary: {
          borderRadius : 10,
        },
        textPrimary: {
          background: 'inherit',
          color: brand.primaryMain,
        },
        outlinedSecondary: {
          borderRadius : 10,
          borderColor:colors.grey100,
          color: colors.grey100,
          background: 'inherit',
          '&:hover':{
            borderColor:colors.grey100,
            background: 'inherit',
            boxShadow : 'none',
          },
        },
        outlinedInfo: {
          borderRadius : 10,
          borderColor:brand.primaryMain,
          color: brand.primaryMain,
          background: 'inherit',
          '&:hover':{
            borderColor:brand.primaryMain,
            background: 'inherit',
            boxShadow : 'none',
          },
        },
        containedSecondary: {
          borderRadius : 10,
          color: brand.secondaryMain,
          background: colors.grey10,
          boxShadow : 'none',
          '&:hover':{
            borderColor:colors.grey10,
            color: brand.secondaryMain,
            background: colors.grey10,
            boxShadow : 'none',
          },
        },
        textSecondary: {
          background: 'inherit',
          color: brand.secondaryMain,
          boxShadow : 'none',
          '&:hover':{
            color: brand.secondaryMain,
            background: colors.grey10,
            boxShadow : 'none',
          },
        }
      },
    },
    MuiContainer: {
      styleOverrides:{
        root: {
          display : 'flex',
          background: colors.bgColor,
          padding: '16px 24px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius : '14px',
          boxShadow:'0px 0px 15px 0px #28293D08',
          padding: '0px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          '&:last-child': {
            paddingBottom: '16px'
          },
        }
      }
    },
    MuiLink:{
      styleOverrides: {
        root: {
          fontFamily:baseFontFamily,
          fontSize: fontSize.b2,
          textDecoration : 'none',
          '&:hover': {
            textDecoration: 'underline'
          },
        }
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        }
      }
    },
    MuiInputBase: {
      styleOverrides:{
        root:{
          fontSize: fontSize.b1,
          borderRadius: '10px',
          backgroundColor : colors.white,
          border: 'none',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `${brand.primaryMain} !important`
          },
          '&.Mui-error': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: `${colors.danger} !important`
            }
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important',
            borderColor : `${brand.primaryMain} !important`
          },
          '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor : `${colors.danger} !important`
          },
          '&.Mui-disabled': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: `#BBBBBF !important`
            }
          },
        },
        input: {
          padding: '13px 15px'
        },
        inputMultiline: {
          padding: '0px !important'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides:{
        input: {
          padding: '13px 15px'
        },
        notchedOutline : {
          borderColor: colors.grey50,
          borderRadius: '10px',
          borderWidth: '1px !important',
        }
      }
    },
    MuiInputLabel:{
      styleOverrides:{
        root: {
          top: -2,
          color: colors.grey100,
          '&.Mui-focused': {
            color: brand.primaryMain
          },
          '&.Mui-error':{
            color: colors.danger,
          }
        },
        shrink:{
          top: 0,
        },
        asterisk : {
          color : colors.danger
        }
      }
    },
    MuiAutocomplete:{
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root':{

            padding : '6px'
          }
        },
        option : {
          '&.Mui-focused':{
            backgroundColor : `${colors.grey10} !important` 
          },
          '&[aria-selected="true"]': {
            backgroundColor : `${brand.primaryMain} !important` 
          }
        },
        paper: {
          boxShadow : '0px 2px 15px 0px rgba(0, 0, 0, 0.12)'
        },
        input: {
          minWidth : '0px !important'
        },
        tag : {
          display: 'flex',
          padding: '2px 10px',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor : brand.primaryMain,
          color : brand.primaryMain,
          borderRadius : '60px',
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius : '0px !important',
          boxShadow : 'none',
          borderBottom : `1px solid ${colors.grey10}`,
          '&.Mui-expanded':{
           
          },
          '&:before': {
            display : 'none'
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding : 0
        }
      }
    },
    MuiAccordionDetails:{
      styleOverrides: {
        root: {
          padding : '8px 0px 16px'
        }
      }
    }
  },
  
});

export default theme;
