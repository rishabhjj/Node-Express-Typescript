import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';

export class UserController {
  public static getUserProfileData(req: Request, res: Response, next: NextFunction) {
    try {
      const data = UserService.userProfileData();
      res.send(data).status(200);
    } catch (e) {
      throw e;
    }
  }
}