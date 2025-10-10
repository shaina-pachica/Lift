import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(helmet());
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map