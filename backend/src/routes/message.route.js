import express from "express";

const router = express.Router();

router.get("/send", (res, req) => {
  req.send("Send message endpoint");
});

export default router;
