import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function getDate(config: dayjs.ConfigType) {
    return dayjs.utc(config);
}
