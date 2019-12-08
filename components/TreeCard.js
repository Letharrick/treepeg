import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Card, Typography, Box, Container } from '@material-ui/core';

const styles = {
    card: {
        width: 350,
        height: 250,
    }
}

class TreeCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <Card color={'primary'} style={styles.card}>
                <Container>
                    <Box textAlign={'center'} fontWeight={700}>
                        <Typography variant={'h4'}>{this.props.tree.common_name}</Typography>
                    </Box>
                    <Box textAlign={'center'} fontStyle={'italic'}>
                        <Typography variant={'h6'}>{this.props.tree.botanical_name}</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    </Box>
                </Container>
            </Card>
        );
    }
}

export default TreeCard;