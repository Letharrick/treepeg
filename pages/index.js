import React from 'react';
import Head from 'next/head';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TreeCard from '.././components/TreeCard';
import SearchBar from '.././components/SearchBar';
import { lightGreen, brown, red } from '@material-ui/core/colors';

const GREEN = '#EAFFD7';
const DARK_PURPLE = '#300C31';

const THEME = createMuiTheme({
    palette: {
        primary: lightGreen,
        secondary: brown,
        error: red
    },
    typography: {
        fontFamily: 'Raleway, sans-serif'
    },
    props: {
        MuiCard: {
            elevation: 5
        },
        MuiInputBase: {
            fullWidth: true,
        }
    },
    overrides: {
        MuiCard: {
            root: {
                padding: 15,
                borderRadius: 25
            }
        }
    }
});

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={THEME}>
                <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <Head>
                        <title>TreePeg</title>
                        <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,700&display=swap" rel="stylesheet"/>
                    </Head>

                    <Typography variant={'h2'}>TreePeg</Typography>
                    <SearchBar></SearchBar>
                    <TreeCard></TreeCard>

                    <style jsx global> {`
                            html {
                                width: 100%;
                                height: 100%;
                            }

                            body {
                                width: 100%;
                                height: 100%;
                                padding: 0;
                                margin: 0;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                text-align: center;
                                background-color: white;
                            }

                            #__next {
                                width: 100%;
                                height: 100%;
                            }
                    `} </style>
                </Box>
            </ThemeProvider>
        );
    }

    onSearch() {
        
    }
}

export default Index;