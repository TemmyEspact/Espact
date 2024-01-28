import AnalyticsActive from './Icons/analytics-active.svg';
import AnalyticsInactive from './Icons/analytics-inactive.svg';
import DashboardActive from './Icons/dashboard-active.svg';
import DashboardInactive from './Icons/dashboard-inactive.svg';
import UpdateActive from './Icons/update-active.svg';
import UpdateInactive from './Icons/update-inactive.svg';
import CreateActive from './Icons/create-active.svg';
import CreateInactive from './Icons/create-inactive.svg';
import FileActive from './Icons/file-active.svg';
import FileInactive from './Icons/file-inactive.svg';
import ReminderActive from './Icons/reminder-active.svg';
import ReminderInactive from './Icons/reminder-inactive.svg';
import MessageActive from './Icons/message-active.svg';
import MessageInactive from './Icons/message-inactive.svg';
import UsersActive from './Icons/users-active.svg';
import UsersInactive from './Icons/users-inactive.svg';
import CheckActive from './Icons/check-active.svg';
import CheckInactive from './Icons/check-inactive.svg';
import SettingsActive from './Icons/settings-active.svg';
import SettingsInactive from './Icons/settings-inactive.svg';
import ProfileActive from './Icons/profile-active.svg';
import ProfileInactive from './Icons/profile-inactive.svg';
import LogsActive from './Icons/logs-active.svg';
import LogsInactive from './Icons/logs-inactive.svg';
import AiActive from './Icons/ai-active.svg';
import AiInactive from './Icons/ai-inactive.svg';

export default function Icon({ name, active, size = 25 }) {
    const style = { height: size, width: size };
    if (name == 'analytics') {
        if (active) {
            return <img src={AnalyticsActive} style={style} />;
        } else {
            return <img src={AnalyticsInactive} style={style} />;
        }
    }
    if (name == 'dashboard') {
        if (active) {
            return <img src={DashboardActive} style={style} />;
        } else {
            return <img src={DashboardInactive} style={style} />;
        }
    }
    if (name == 'update') {
        if (active) {
            return <img src={UpdateActive} style={style} />;
        } else {
            return <img src={UpdateInactive} style={style} />;
        }
    }

    if (name == 'create') {
        if (active) {
            return <img src={CreateActive} style={style} />;
        } else {
            return <img src={CreateInactive} style={style} />;
        }
    }

    if (name == 'file') {
        if (active) {
            return <img src={FileActive} style={style} />;
        } else {
            return <img src={FileInactive} style={style} />;
        }
    }

    if (name == 'reminder') {
        if (active) {
            return <img src={ReminderActive} style={style} />;
        } else {
            return <img src={ReminderInactive} style={style} />;
        }
    }

    if (name == 'message') {
        if (active) {
            return <img src={MessageActive} style={style} />;
        } else {
            return <img src={MessageInactive} style={style} />;
        }
    }

    if (name == 'users') {
        if (active) {
            return <img src={UsersActive} style={style} />;
        } else {
            return <img src={UsersInactive} style={style} />;
        }
    }

    if (name == 'check') {
        if (active) {
            return <img src={CheckActive} style={style} />;
        } else {
            return <img src={CheckInactive} style={style} />;
        }
    }

    if (name == 'settings') {
        if (active) {
            return <img src={SettingsActive} style={style} />;
        } else {
            return <img src={SettingsInactive} style={style} />;
        }
    }

    if (name == 'profile') {
        if (active) {
            return <img src={ProfileActive} style={style} />;
        } else {
            return <img src={ProfileInactive} style={style} />;
        }
    }

    if (name == 'logs') {
        if (active) {
            return <img src={LogsActive} style={style} />;
        } else {
            return <img src={LogsInactive} style={style} />;
        }
    }

    if (name == 'ai') {
        if (active) {
            return <img src={AiActive} style={style} />;
        } else {
            return <img src={AiInactive} style={style} />;
        }
    }
    return <></>;
}
