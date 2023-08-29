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