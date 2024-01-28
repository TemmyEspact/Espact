import Drawer from '@mui/material/Drawer';

export default function TemporaryDrawer({ openDrawer, onRequestClose, children }) {
    return (
        <Drawer anchor="right" open={openDrawer} onClose={() => onRequestClose()}>
            <div className="h-[100vh] rounded transform transition-transform duration-300 ease-in-out translate-x-0 w-full bg-[white]">
                {children}
            </div>
        </Drawer>
    );
}
