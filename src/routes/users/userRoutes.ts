import { Router, Request, Response} from 'express';

const usrRoute = Router();

usrRoute.get('/', (req: Request, res: Response) => {
    try {
        res.send({ message: "Everything is okay."});
    } catch (error) {
        res.send({ message: "Some error occurs."});
    }
});

export default usrRoute;