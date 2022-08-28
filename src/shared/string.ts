import moment from 'moment';
export function formatTimeDuration(time: string) {
  {
    if (!time) {
      return '';
    }
    moment.relativeTimeRounding(Math.floor);
    moment.updateLocale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'Just now',
        ss: '%d seconds',
        m: '1 minute ago',
        mm: '%d minutes ago',
        h: '1 hour ago',
        hh: '%d hours ago',
        d: '1 day ago',
        // dd: '%d days ago',
        dd: (_number: number) => {
          if (_number < 7) {
            return _number + ' days ago'; // Moment uses "d" when it's just 1 day.
          }
          const weeks = Math.floor(_number / 7);

          return `${weeks} ${weeks > 1 ? 'weeks' : 'week'} ago`;
        },
        M: '1 month ago',
        MM: '%d months ago',
        y: '1 year ago',
        yy: '%d years ago',
      },
    });

    moment.relativeTimeThreshold('s', 60);
    moment.relativeTimeThreshold('m', 60);
    moment.relativeTimeThreshold('h', 24);
    moment.relativeTimeThreshold('d', 30);

    return moment(time).locale('us').fromNow(true);
  }
}
