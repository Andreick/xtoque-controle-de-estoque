import { Request, Response } from 'express';

class HelloController {
  public async hello(req: Request, res: Response) {
    return res.send('Hello World');
  }
}

export default new HelloController();
