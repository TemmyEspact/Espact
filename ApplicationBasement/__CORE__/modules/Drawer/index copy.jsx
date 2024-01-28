import Drawer from '@mui/material/Drawer';
import styled from 'styled-components';
import './index.css';

const Wrapper = styled.div``;

export default function TemporaryDrawer({ openDrawer, onRequestClose, center, children }) {
    return (
        <Wrapper>
            <Drawer anchor="right" open={openDrawer} onClose={() => onRequestClose()} className="nobackground">
                <div className="rounded transform transition-transform duration-300 ease-in-out translate-x-0 w-full h-full">
                    <div className="h-full bg-white">
                        <div className="mb-[10vh]">{children}</div>
                    </div>
                </div>
            </Drawer>
        </Wrapper>
    );
}
