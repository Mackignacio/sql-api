import { Get, Patch, Post, Delete, Put } from "@mayajs/common";
import { Request, Response, NextFunction } from "express";
import { Controller } from "@mayajs/core";
import { UsersServices } from "./users.service";

@Controller({
  model: "./users.model",
  route: "/users",
})
export class UsersController {
  constructor(private services: UsersServices) {}

  @Get({ path: "/", middlewares: [] })
  root(req: Request, res: Response, next: NextFunction): void {
    res.send(this.services.hello());
  }
}
