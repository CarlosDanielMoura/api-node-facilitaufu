import { Request, Response } from "express";
import { cursoService } from "../services/CursoService";

class CursoController {
  async get_curso(request: Request, response: Response) {
    return cursoService.get_all_cursos(request, response);
  }
}

export const cursoController = new CursoController();
