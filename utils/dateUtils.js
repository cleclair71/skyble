export const getCurrentTime = () => {
    const date = new Date();
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return {
        time: `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`,
        date: date.getDate(),
        month: monthNames[date.getMonth()],
        weekday: weekdayNames[date.getDay()],
    };
}

export const getTimeOfDay = () => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'day' : 'night';
};

export const getSeason = (latitude) => {
    const month = new Date().getMonth() + 1;
    let season = '';

    if (latitude > 0) {
        // Northern Hemisphere
        if (month >= 3 && month <= 5) season = 'spring';
        else if (month >= 6 && month <= 8) season = 'summer';
        else if (month >= 9 && month <= 11) season = 'autumn';
        else season = 'winter';
    } else {
        // Southern Hemisphere (reverse seasons)
        if (month >= 3 && month <= 5) season = 'autumn';
        else if (month >= 6 && month <= 8) season = 'winter';
        else if (month >= 9 && month <= 11) season = 'spring';
        else season = 'summer';
    }

    return season;
};