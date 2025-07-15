const fs = require("fs");

fs.writeFile("../demo.txt", "Hello nitesh sir", { encoding: "utf-8" }, function (err) {
    if (err) return console.log(err);
    console.log("File written successfully");
});

