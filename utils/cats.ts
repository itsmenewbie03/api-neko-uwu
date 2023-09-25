// THIS is JUST CHATGPT's CODE
// I JUST WANT TO HAVE AN EASE IN
// RETURNING RANDOM ELEMENT FROM AN ARRAY
declare global {
    interface Array<T> {
        getRandomElement(): T | undefined;
    }
}

Array.prototype.getRandomElement = function <T>(): T | undefined {
    if (this.length === 0) {
        return undefined;
    }

    const randomIndex = Math.floor(Math.random() * this.length);
    return this[randomIndex];
};

// END OF CHATGPT CODE

const cats = async () => {
    const { data } = await fetch("https://catfact.ninja/facts").then((res) =>
        res.json()
    );
    const { fact: cat_fact } = data.getRandomElement();
    const cat_img = await fetch(
        "https://api.thecatapi.com/v1/images/search"
    ).then((res) => res.json());
    const { url } = cat_img[0];
    return {
        cat_fact: cat_fact,
        cat_img: url,
    };
};

export { cats };
