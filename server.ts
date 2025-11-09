import app from "./src/app.js";

const startServer = async () => {
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
}

startServer();