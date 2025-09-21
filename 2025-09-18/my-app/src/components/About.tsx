import { Box, Button, Stack, TextField, Typography } from "@mui/material"

function About() {
  return (
    <Box sx={{ border: "2px solid gray" }}>
      <div id="personalBox">
        <Typography variant="h1">Carl-Eric Sepp</Typography>
        <Typography variant="h3">Hobbies</Typography>
        <Stack>
          <div>VR games</div>
          <div>Cooking</div>
          <div>Spending time with family and friends</div>
        </Stack>

        <div id="contactForm">
          <Box
            component="form"
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1976D2",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
              },
            }}
          >
            <TextField
              id="emailInput"
              type="email"
              placeholder="thisEmail@email.com"
              variant="outlined"
            ></TextField>
            <br />
            <TextField
              id="textInput"
              type="text"
              placeholder="Random text"
              variant="outlined"
            ></TextField>
          </Box>
          <Button variant="contained">Call to action</Button>
        </div>
      </div>
    </Box>
  )
}

export default About
