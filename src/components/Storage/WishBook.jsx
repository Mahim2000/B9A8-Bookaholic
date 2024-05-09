const storedGetRead = () => {
    const readStored = localStorage.getItem('wish');
    if(readStored) {
        return JSON.parse(readStored);
    }
    return[];
}

const wishBookDetails = wishId => {
    const readStoreds = storedGetRead();
    const exists = readStoreds.find(id => id  === wishId)
    if(!exists) {
        readStoreds.push(wishId);
        localStorage.setItem('wish', JSON.stringify(readStoreds))
    }
}

export {storedGetRead, wishBookDetails}