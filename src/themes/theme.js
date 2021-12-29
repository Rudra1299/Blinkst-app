import { createTheme } from "@mui/material";
export const PrimaryButtonTheme = createTheme({
  palette: {
    primary: {
      main: "#2ce080",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export const GridTheme = createTheme({
  palette: {
    background: {
      default: "#f1f6f4",
    },
  },
});

export const PaperTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#f1f6f4",
        },
      },
    },
  },
});
