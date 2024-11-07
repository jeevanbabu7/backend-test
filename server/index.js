import express from 'express';
import cors from 'cors';
const app = express();

const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173', // Update with your frontend's URL
  }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});