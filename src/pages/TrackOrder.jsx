import * as React from 'react';
import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Button,
    Paper,
    Typography,
    Stack,
    Card,
    CardContent
} from '@mui/material';


const steps = [
    {
        label: 'Order Confirmed',
    },
    {
        label: 'Cooked',
    },
    {
        label: 'Out of delivery',
    },
    {
        label: 'Delivered',

    },
];

export default function TrackOrder() {
    const [activeStep, setActiveStep] = React.useState(1);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ p: 2 }}>
            <Stack direction="row" alignItems={"center"} justifyContent="center" sx={{ minHeight: "50vh" }}>

                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                            >
                                {step.label}
                            </StepLabel>

                        </Step>
                    ))}
                </Stepper>
            </Stack>

            <Card>
                <CardContent>
                    <Stack direction="row" alignItems={"center"} justifyContent="space-between" >
                        <Typography variant='body'>
                            Want to cancel this order ?
                        </Typography>

                        <Button variant='contained' color="error" size="small">
                            Cancel
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}
