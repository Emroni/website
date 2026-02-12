import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export function getDate(value: dayjs.ConfigType, format?: string) {
    return dayjs.utc(value, format);
}
