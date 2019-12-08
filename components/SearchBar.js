import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined'

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
        this.state = {
            value: ''
        }
    }

    render() {
        let inputElement = <InputBase onChange={e => {this.setState({value: e.target.value})}} placeholder={'Neighbourhood'}></InputBase>;

        return (
            <Box style={{borderRadius: 100}} width={1 / 4} m={5} p={2} pl={3} pr={3} boxShadow={10} display={'flex'}>
                {inputElement}
                <IconButton onClick={() => {this.props.onSearch(this.state.value)}} type="submit" aria-label="search">
                    <SearchOutlined color={'primary'}/>
                </IconButton>
            </Box>
        );
    }
}

export default SearchBar;