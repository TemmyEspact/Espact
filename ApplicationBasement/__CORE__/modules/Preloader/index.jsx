import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

export function Loading() {
    return (
        <div className="w-[100%] flex justify-center items-center" style={{ height: 'calc(100vh - 85px)' }}>
            <CircularProgress color="inherit" />
        </div>
    );
}

export default function Preloader() {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => {});
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div className="relative w-[100%] flex justify-center items-center" style={{ height: 'calc(100vh - 85px)' }}>
            <div className="w-full absolute top-0 left-0 right-0">
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            </div>
        </div>
    );
}
