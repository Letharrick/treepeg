import React from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Card, Typography, Box, Container } from '@material-ui/core';

const styles = {
    card: {
        marginLeft: 20,
        marginRight: 20,
        width: 350,
        height: 200,
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
                        <Typography variant={'h4'}>{this.props.treeStats.common_name}</Typography>
                    </Box>
                    <Box textAlign={'center'} fontStyle={'italic'}>
                        <Typography variant={'h5'}>{this.props.treeStats.botanical_name}</Typography>
                    </Box>
                    <Box textAlign={'center'} fontStyle={'italic'}>
                        <Typography variant={'h6'}>{this.props.treeStats.amount}</Typography>
                    </Box>
                </Container>
            </Card>
        );
    }
}

export default TreeCard;