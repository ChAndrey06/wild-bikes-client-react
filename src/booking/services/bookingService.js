const bookingKey = 'booking'

export const getBooking = () => new Promise(resolve => setTimeout(resolve(
    JSON.parse(localStorage.getItem(bookingKey))
), 2000));

export const setBooking = (booking) => new Promise(resolve => setTimeout(() => {
    localStorage.setItem(bookingKey, JSON.stringify(booking));

    return resolve();
}, 2000));

export const signBooking = (signature) => new Promise(resolve => setTimeout(() => {
    const booking = JSON.parse(localStorage.getItem(bookingKey));
    localStorage.setItem(bookingKey, JSON.stringify({ ...booking, signature }));

    return resolve();
}, 2000));