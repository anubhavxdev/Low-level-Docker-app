import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import formRoutes from './routes/formRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/formdb')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/forms', formRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});