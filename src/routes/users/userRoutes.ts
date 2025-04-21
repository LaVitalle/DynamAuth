import { Router, Request, Response } from "express";
import UserService from "../../services/UserService";

const usrRoute = Router();
const userService = new UserService();

usrRoute.post("/create", (req: Request, res: Response) => {
  try {
    userService.userInsert(req, res);
  } catch (error) {
    res.status(500).json({ message: ("Error" + error) });
  }
});

usrRoute.post("/login", (req: Request, res: Response) => {
    try {
        res.send({ message: "okay, you're here." });
      } catch (error) {
        res.status(500).json({ message: ("Error" + error) });
      } 
});

export default usrRoute;