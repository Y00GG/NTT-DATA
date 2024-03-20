import { Theme, createTheme } from "@mui/material";

export const theme: Theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#FFF", //colors.primary.main,
        },
        primary: {
            main: "#ABCFF3"
        },
        secondary: {
            main: "#550527"
        },
        error: {
            main: "#A10702"
        },
        warning: {
            main: "#F44708"
        },
        success: {
            main: "#87D907"
        },
        info: {
            main: "#ffffff"
        },
    },
    typography: {
        fontFamily: "Helvetica Neue LT Std",
        fontSize: 14,
        h1: {
            fontSize: 84,
            fontWeight: 400,
            lineHeight: "101px",
            letterSpacing: "-0.02em",
        },
        h2: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "60px",
            lineHeight: "72px",
            letterSpacing: "-0.02em",
        },
        h3: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "58px",
            letterSpacing: "-0.02em",
        },
        h4: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "34px",
            lineHeight: "41px",
            letterSpacing: "-0.02em",
        },
        h5: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "29px",
            letterSpacing: "-0.02em",
        },
        h6: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "22px",
            letterSpacing: "-0.02em",
        },
        button: { fontSize: 14 },
        subtitle2: { fontSize: 14 },
        body1: { fontSize: 14 },
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    borderRadius: "0.8rem",
                    fontWeight: "bold",
                    padding: "0.6rem 1.1rem",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: "1.8rem",
                },
            },
        },

    },
});