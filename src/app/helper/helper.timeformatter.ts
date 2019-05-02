import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

export const formatDate = (dateStr: string) :string => {
    let date = new Date(dateStr);
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(date);
}