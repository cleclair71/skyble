export const getCurrentTime = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
}