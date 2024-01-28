import { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment from 'moment';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

export default function BasicDateTimePicker({ title, onChange = () => null, ...props }) {
    const [value, setValue] = useState(moment());
    return (
        <div className="mt-[15px]">
           {title !== "Date/Time (Case Received)" && <div className="mb-[10px] font-semibold">{title}</div>}
            <DateTimePicker
                label={title}
                slotProps={{ textField: { size: 'small' }, fieldSeparator: { children: 'to' } }}
                defaultValue={value}
                viewRenderers={{
                    hours: renderTimeViewClock,
                    minutes: renderTimeViewClock,
                    seconds: renderTimeViewClock,
                }}
                onChange={(newValue) => {
                    setValue(newValue);
                    onChange(newValue.format('YYYY-MM-DD HH:mm:ss'));
                }}
                // disablePast
            />
        </div>
    );
}
