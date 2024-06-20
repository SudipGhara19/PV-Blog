import express from 'express';

const port = 5801;
const app = express();

app.listen(port, () => {
    console.log(`App is up and running on port ${port}`)
});