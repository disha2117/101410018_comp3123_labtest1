const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
            return;
        }

        const words = mixedArray.filter(
            item => typeof item === "string"
        );

        const lowerWords = words.map(word => word.toLowerCase());
        resolve(lowerWords);    
    });
};

const mixedArray = ["HELLO", 123, "WORLD", true, "JAVASCRIPT"];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));