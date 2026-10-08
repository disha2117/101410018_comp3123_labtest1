const fs = require("fs");
const path = require("path");

const logDirectory = path.join(process.cwd(), "Logs");

if (fs.existsSync(logDirectory)) {
    const files = fs.readdirSync(logDirectory);

    files.forEach(file => {
        const filePath = path.join(logDirectory, file);

        fs.unlinkSync(filePath);
        console.log(`Deleted: ${file}`);
    });

    fs.rmdirSync(logDirectory);
    console.log("Logs directory removed");
} else {
    console.log("Logs directory does not exist");
}