import { useState } from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Icons from '@espact/components/Icons';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import './Accordion.css';

const Accordion = styled((props) => <MuiAccordion {...props} />)(({ theme }) => ({
    color: '#ffffff',
    boxShadow: 'none',
    fontSize: '14px !important',
    background: 'transparent',
}));

const AccordionDetails = styled((props) => <MuiAccordionDetails {...props} />)(({ theme }) => ({
    color: '#ffffff',
    boxShadow: 'none',
    fontSize: '14px !important',
    background: '#414047',
    marginRight: '10px',
}));

export default function SimpleAccordion({ openDefault, title, children, icon }) {
    const [open, setOpen] = useState(false);
    const handleClickAway = () => {
        if (open) {
            setOpen(false);
        }
    };

    const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
        color: '#ffffff',
        boxShadow: 'none',
        fontSize: '14px !important',
        background: open ? '#4F4F56' : 'transparent',
        marginRight: 10,
        paddingLeft: '30px',
        marginBottom: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        height: 45,
        minHeight: 45,
    }));

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Accordion
                expanded={open}
                onChange={(e, expanded) => {
                    setOpen(expanded);
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon color="secondary" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="flex items-center">
                        <Icons name={icon} />
                        <p className="ml-[15px]">{title}</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </ClickAwayListener>
    );
}
