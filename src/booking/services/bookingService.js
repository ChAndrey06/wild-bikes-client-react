export function setBooking(booking) {
    localStorage.setItem("booking", JSON.stringify(booking));
}

export function getBooking() {
    return JSON.parse(localStorage.getItem("booking"));
}