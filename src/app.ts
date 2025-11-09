import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send({ message: 'The api is working' });
});

export default app;