import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import stringsController from "./controllers/strings";
import productsController from "./controllers/products";
import productListController from "./controllers/productlist";
import parcelmachinesController from "./controllers/parcelmachines";
import nordpoolpriceController from "./controllers/nord-pool-price";

const app: Express = express();

app.use(cors({
  origin: ['http://localhost:3006']
}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productListController);
app.use('/', parcelmachinesController);
app.use('/', nordpoolpriceController);

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});