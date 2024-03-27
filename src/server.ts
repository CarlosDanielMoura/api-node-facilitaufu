import express from "express";

import routes from "./routes";

export const app = express();

const PORT = 3000;
//Usando rotas do express
app.use(express.json());
app.use(routes);
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
