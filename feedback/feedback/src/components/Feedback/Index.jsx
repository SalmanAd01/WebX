import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, FormControl, FormLabel, Radio, RadioGroup, Rating } from '@mui/material';
import Joi from "joi-browser";
const theme = createTheme();

export default function Index() {
    const [feedback, setFeedBack] = React.useState({
        email: "",
        name: "",
        experience: "",
        management: 0,
        problem: 0,
        gender: "male",
    });
    const [errors, setErrors] = React.useState({});
    const schema = {
        email: Joi.string().email().required(),
        name: Joi.string().min(1).max(20).required(),
        experience: Joi.string().min(10).max(2048).required(),
        management: Joi.number().min(0).max(5).required(),
        problem: Joi.number().min(0).max(5).required(),
        gender: Joi.string().valid("male", "female")
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const result = Joi.validate(feedback,
            schema, { abortEarly: false });
        console.log(result);
        const { error } = result;
        if (error) {
            const errorData = {};
            for (let item of error.details) {
                const name = item.path[0];
                const message = item.message;
                errorData[name] = message;
            }
            console.log(errors);
            setErrors(errorData);
        }else{
            setErrors({});
            alert("here you go")
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <ChatBubbleOutlineIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Turing Cup
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    {errors.email && <Alert severity="error">{errors.email}</Alert>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={feedback.email}
                            onChange={(e) => {
                                setFeedBack({ ...feedback, email: e.target.value })
                            }}
                        />
                    {errors.name && <Alert severity="error">{errors.name}</Alert>}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="name"
                            name="name"
                            autoComplete="email"
                            autoFocus
                            value={feedback.name}
                            onChange={(e) => {
                                setFeedBack({ ...feedback, name: e.target.value })
                            }}
                        />
                    {errors.experience && <Alert severity="error">{errors.experience}</Alert>}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            multiline
                            minRows={6}
                            id="feedback"
                            label="How was your experience"
                            name="feedback"
                            autoComplete="email"
                            autoFocus
                            value={feedback.experience}
                            onChange={(e) => {
                                setFeedBack({ ...feedback, experience: e.target.value })
                            }}
                        />
                    {errors.management && <Alert severity="error">{errors.management}</Alert>}

                        <Typography component="legend">Management</Typography>
                        <Rating
                            name="simple-controlled"
                            value={feedback.management}
                            onChange={(e) => {
                                setFeedBack({ ...feedback, management: e.target.value })
                            }}
                        />
                                            {errors.problem && <Alert severity="error">{errors.problem}</Alert>}

                        <Typography component="legend">Problem Level</Typography>
                        <Rating
                            name="simple-controlled"
                            value={feedback.problem}
                            onChange={(e) => {
                                setFeedBack({ ...feedback, problem: e.target.value })
                            }}
                        />
                        <br />
                        {errors.gender && <Alert severity="error">{errors.gender}</Alert>}

                        <FormControl>
                            <FormLabel id="gender">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="gender"
                                value={feedback.gender}
                                onChange={(e) => {
                                    setFeedBack({ ...feedback, gender: e.target.value })
                                }}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}