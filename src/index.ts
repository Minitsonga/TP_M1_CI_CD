import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "Hello CI/CD", status: "ok" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "healthy" });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
