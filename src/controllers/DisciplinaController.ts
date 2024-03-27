import { Request, Response } from "express";
import { disciplinaService } from "../services/DisciplinaService";

class DisciplinaController {
  async get_disciplinas(request: Request, response: Response) {
    return disciplinaService.get_all_disciplinas(request, response);
  }
}

export const disciplinaController = new DisciplinaController();
