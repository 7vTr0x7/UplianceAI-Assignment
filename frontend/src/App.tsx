import { Box, Grid, Paper, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", p: 2 }}>
        <Grid container spacing={2} sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Counter
              </Typography>

              <Box
                sx={{
                  bgcolor: "background.default",
                  minHeight: "50vh",
                  p: 2,
                }}></Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Rich Text Editor
              </Typography>
              <Box
                sx={{
                  bgcolor: "background.default",
                  minHeight: "50vh",
                  p: 2,
                }}></Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                User Data Form
              </Typography>
              <Box
                sx={{
                  bgcolor: "background.default",
                  minHeight: "50vh",
                  p: 2,
                }}></Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: "100%" }}>
              <Typography variant="h6" gutterBottom>
                Results
              </Typography>
              <Box
                sx={{
                  bgcolor: "background.default",
                  minHeight: "50vh",
                  p: 2,
                }}></Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
