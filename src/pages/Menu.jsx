import React from 'react'
import { Stack, Button, Tabs, Tab, Box, Card, CardContent, Grid, Typography, Chip } from '@mui/material';

export default function Menu() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <div>

            <Box sx={{ bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Recommended" />
                    <Tab label="Menu Two" />
                    <Tab label="Menu Three" />
                    <Tab label="Menu Four" />
                    <Tab label="Menu Five" />
                    <Tab label="Menu Six" />
                    <Tab label="Menu Seven" />
                </Tabs>
            </Box>


            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                style={{ marginTop: "1rem", padding: "1rem" }}
            >

                <Button variant="contained" color="primary" >Veg</Button>
                <Button variant="contained" color="inherit">Non-Veg</Button>
            </Stack>

            <Stack
                direction="column"
                spacing={3}
                style={{ marginTop: "1rem",padding: "1rem" }}
            >
                {
                    [1, 2, 3, 4, 5].map((el) => (
                        <Card>
                            <CardContent>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={4}>
                                        <img src="/food.png" alt="" />
                                    </Grid>
                                    <Grid item xs={8} >
                                        <Stack
                                            direction="column"
                                            alignItems="flex-start"
                                            spacing={0.5}
                                        >
                                            <Chip label="15% Off" color="primary" size="small" />
                                            <Typography variant='h6'>
                                                Burger ipsum
                                            </Typography>
                                            <Typography variant='subtitle2'>
                                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            </Typography>

                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                justifyContent={"space-between"}
                                                spacing={5}
                                            >

                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    spacing={1}
                                                >
                                                    <Typography variant='h5'>  $12.40 </Typography>
                                                    <Typography variant='caption'> <strike>$15.00</strike> </Typography>
                                                </Stack>
                                                <div className="product__add-cart">
                                                    +
                                                </div>
                                            </Stack>
                                        </Stack>
                                    </Grid>


                                </Grid>
                            </CardContent>
                        </Card>

                    ))}
            </Stack>

            <CardContent>
            </CardContent>
            <CardContent>
            </CardContent>
        </div>

    )
}
