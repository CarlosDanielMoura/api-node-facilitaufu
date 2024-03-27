import { Request, Response } from "express";
import { atividadeAcademicaService } from "../services/AtividadeAcademicaService";

class AtividadeAcademicaController {
  async get_atividade_academica(req: Request, res: Response) {
    return atividadeAcademicaService.get_all_atividade_academica(req, res);
  }
}
export const atividadeAcademicaController = new AtividadeAcademicaController();
