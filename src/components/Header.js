import React from 'react';
import {AppBar, Toolbar, Grid, Typography, Button} from "@mui/material";


const Header = () => {

    const USERNAME = localStorage.getItem('LOGIN_USERNAME');
    
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Grid justify="space-between" container>
                    <Grid item flex={9}>
                        <Typography variant="h6">{USERNAME ? USERNAME : '오늘'}의 할일</Typography>
                    </Grid>
                    <Grid item>
                        <Button color="inherit">
                            로그아웃
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;