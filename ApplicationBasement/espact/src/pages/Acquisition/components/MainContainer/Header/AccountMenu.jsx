import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import UpdateIcon from '@mui/icons-material/Update';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Button from '@mui/material/Button';
import { IoChevronDownSharp } from 'react-icons/io5';
import JCBaseInit from '@components/JCBase';
import { useNavigate } from 'react-router-dom';
import useUserDetails from '@espact/components/Hooks/useUserDetails';

export default function AccountMenu() {
    const navigate = useNavigate();
    const userDetails = useUserDetails().get();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = async () => {
        const JCBase = await JCBaseInit;
        await JCBase.deleteCookie();
        navigate('/', { replace: true });
        window.location.reload();
    };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Button variant="text" className="flex items-center text-left" onClick={(event) => handleClick(event)}>
                    <div className="mr-[20px] leading-4">
                        <div className="text-primaryColor font-semibold">{userDetails?.fullname}</div>
                        <div className="text-[11px] text-[#4F4F4F]">{userDetails?.rankname}</div>
                    </div>
                    <div>
                        <IoChevronDownSharp color="#000000" size={14} />
                    </div>
                </Button>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            'overflow': 'visible',
                            'filter': 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            'mt': 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => navigate('/profile')}>
                    <Avatar /> Waiting
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => navigate('/case-update-request')}>
                    <ListItemIcon>
                        <UpdateIcon fontSize="small" />
                    </ListItemIcon>
                  Waiting
                </MenuItem>
                <MenuItem onClick={() => navigate('/analystics')}>
                    <ListItemIcon>
                        <AutoGraphIcon fontSize="small" />
                    </ListItemIcon>
                    Waiting
                </MenuItem>
                <MenuItem onClick={() => logOut()}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
