const express = require("express");

const app = express();

app.get("/", (request, response) => {
    return response.status(200).json({
        status: "success",
        message: "Successfully running..."
    });
});

app.listen(4000, () => {
    return console.log("App listening on port 4000");
});
