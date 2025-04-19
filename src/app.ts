import express from "express";
import allRoutes from './routes/appRoutes';

const app = express();
const routes = allRoutes;

app.use(express.json());
app.use('/', routes);

export default app;