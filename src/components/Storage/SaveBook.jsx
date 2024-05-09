const getStoredRead = () => {
    const storedRead = localStorage.getItem('book');
    if(storedRead) {
        return JSON.parse(storedRead);
    }
    return[];
}

const saveBookDetails = id => {
    const storedReads = getStoredRead();
    const exists = storedReads.find(id => id  === id)
    if(!exists) {
        storedReads.push(id);
        localStorage.setItem('book', JSON.stringify(storedReads))
    }
}

export {getStoredRead, saveBookDetails}