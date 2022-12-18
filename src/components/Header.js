import React from 'react';
import {AppBar, Toolbar, Grid, Typography, Button} from "@mui/material";


const Header = () => {

    const USERNAME = localStorage.getItem('LOGIN_USERNAME');

    const logoutHandler = e => {
        // 로컬스토리지 데이터 제거
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('LOGIN_USERNAME');
        window.location.href='/login';
    };
    
    const button = USERNAME 
            ? (<Button color="inherit" onClick={logoutHandler}>로그아웃</Button>) 
            : (<Button color="inherit" onClick={() => { window.location.href='/login'; }}>로그인</Button>);

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Grid justify="space-between" container>
                    <Grid item flex={9}>
                        <Typography variant="h6">{USERNAME ? USERNAME : '오늘'}의 할일</Typography>
                    </Grid>
                    <Grid item>
                        {button}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;