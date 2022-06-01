import React from "react";

import PaidIcon from '@mui/icons-material/Paid';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LinkIcon from '@mui/icons-material/Link';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import FactoryIcon from '@mui/icons-material/Factory';
import HandymanIcon from '@mui/icons-material/Handyman';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import SourceIcon from '@mui/icons-material/Source';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Typography
} from "@mui/material";

function SideBar() {

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <input id="side__toggle" type="checkbox"/>
            <SourceIcon fontSize={'large'} className="side__btn" htmlFor="side__toggle"/>
            <div className={'side_bar'}>
                <Accordion style={{backgroundColor: '#222222', color: '#ffffff'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color: '#ffffff'}} />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header">
                        <Typography style={{color: '#ffffff'}} >Що такє криптовалюта</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <List>
                                <ListItem disablePadding>
                                    <a href={'#fiat'}>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <PaidIcon style={{color: '#ffffff'}}/>
                                            </ListItemIcon>
                                            <ListItemText style={{color: '#ffffff'}}>Що такє фіатна валюта?</ListItemText>
                                        </ListItemButton>
                                    </a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#cur'}><ListItemButton>
                                        <ListItemIcon>
                                            <CurrencyBitcoinIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Що такє крипто валюта</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#block'}><ListItemButton>
                                        <ListItemIcon>
                                            <LinkIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Що такє Blockchain?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#money'}><ListItemButton>
                                        <ListItemIcon>
                                            <AccountBalanceWalletIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Що такє криптогаманець?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#data'}><ListItemButton>
                                        <ListItemIcon>
                                            <DataObjectIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Які дані зберігає криптогаманець?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#get'}><ListItemButton>
                                        <ListItemIcon>
                                            <DataSaverOnIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Яким чином множна отримати криптовалюту?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                            </List>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: '#222222', color: '#ffffff'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary          expandIcon={<ExpandMoreIcon style={{color: '#ffffff'}} />}
                                               aria-controls="panel2bh-content"
                                               id="panel2bh-header">
                        <Typography >Як отримати криптовалюту?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            <List>
                                <ListItem disablePadding>
                                    <a href={'#help'}><ListItemButton>
                                        <ListItemIcon>
                                            <FactoryIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Як отримати криптовалюту за допомогою майнінга?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#help'}><ListItemButton>
                                        <ListItemIcon>
                                            <HandymanIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Що такє майнінг?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#buy'}><ListItemButton>
                                        <ListItemIcon>
                                            <AttachMoneyIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Як купити криптовалюту?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#bank'}><ListItemButton>
                                        <ListItemIcon>
                                            <AccountBalanceIcon style={{color: '#ffffff'}}/>
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Що такє біржа?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                                <ListItem disablePadding>
                                    <a href={'#japan'}><ListItemButton>
                                        <ListItemIcon>
                                            <WaterfallChartIcon style={{color: '#ffffff'}} />
                                        </ListItemIcon>
                                        <ListItemText style={{color: '#ffffff'}}>Що такє «Японскі свічки»?</ListItemText>
                                    </ListItemButton></a>
                                </ListItem>
                            </List>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}

export default SideBar
