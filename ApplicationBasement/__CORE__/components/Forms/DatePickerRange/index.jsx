import { useEffect, useState } from 'react';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
// import dayjs from 'dayjs';
import moment from 'moment';

export default function DateRange({ onChange = () => null, ...props }) {
    const [value, setValue] = useState([moment(), moment()]);
    const [context, setContext] = useState();

    useEffect(() => {
        const start = moment(value[0]).format('YYYY-MM-DD HH:mm:ss');
        const end = moment(value[1]).format('YYYY-MM-DD HH:mm:ss');
        onChange({ start, end, context });
    }, [value, context]);

    return (
        <DateRangePicker
            localeText={{ start: 'Select start date from', end: 'Select end date from' }}
            slotProps={{ textField: { size: 'small' }, fieldSeparator: { children: 'to' } }}
            disableFuture={true}
            value={value}
            onChange={(newValue, context) => {
                setValue(newValue);
                setContext(context);
            }}
            views={['date', 'month', 'year']}
            {...props}
        />
    );
}
