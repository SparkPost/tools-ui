import moment from 'moment';

export const formatDate = (ts = new Date()) => moment(ts).local().format('MMM D YYYY[, at] h:mm A');
