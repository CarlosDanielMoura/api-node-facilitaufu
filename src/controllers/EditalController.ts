import { Request, Response } from "express";
import { editalServive } from "../services/EditalService";

class EditalController {
  async get_edital(request: Request, response: Response) {
    return editalServive.getEdital(request, response);
  }
}

export const editalController = new EditalController();
