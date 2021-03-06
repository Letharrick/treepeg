import React from 'react';
import Head from 'next/head';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TreeCard from '.././components/TreeCard';
import SearchBar from '.././components/SearchBar';
import { lightGreen, brown, red } from '@material-ui/core/colors';

import fetchAPI from '.././fetch';

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
        this.search = this.search.bind(this);
        this.state = {
            treeCards: []
        }
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
                    <SearchBar onSearch={this.search}></SearchBar>
                    
                    <Box display={'flex'} >
                        {this.state.treeCards}
                    </Box>

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

    search(neighbourhood) {
        let input = {
            neighbourhood: neighbourhood.toUpperCase()
        };

        fetchAPI('https://data.winnipeg.ca/resource/hfwk-jp4h.json', input).then(trees => {
            console.log("Fetched Successfully!")

            let treeCards = [];

            let treeDict = {};
            for (let tree of trees) {
                let treeList = treeDict[tree.common_name];
                if (treeList) {
                    treeList.push(tree);
                } else {
                    treeDict[tree.common_name] = [tree];
                }
            }
            
            let treeStats = []
            for (let k in treeDict) {
                let treeListOfSpecies = treeDict[k];

                let speciesInformation = {};
                speciesInformation.common_name = k;
                speciesInformation.botanical_name = treeListOfSpecies[0].botanical_name;
                speciesInformation.amount = treeListOfSpecies.length;
                treeStats.push(speciesInformation);
            }

            for (let treeStat of treeStats) {
                let treeCard = <TreeCard treeStats={treeStat}></TreeCard>;
                treeCards.push(treeCard);
            }

            this.setState({
                treeCards
            })
        })
    }
}

export default Index;