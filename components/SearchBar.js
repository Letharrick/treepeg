import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';

const THEME = createMuiTheme({
    props: {
        MuiInputBase: {
            fullWidth: true,
        }
    }
});

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeProvider theme={THEME}>
                <Box style={{margin: 10, padding: 15, paddingLeft: 25, paddingRight: 25, borderRadius: 100}} width={1 / 4} boxShadow={10}>
                    <InputBase placeholder={'Street'}></InputBase>
                </Box>
            </ThemeProvider>
        );
    }
}

export default SearchBar;