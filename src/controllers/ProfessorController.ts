import { Request, Response } from "express";
import { professorService } from "../services/ProfessorService";

class ProfessorController {
  public async get_professor(request: Request, response: Response) {
    return professorService.get_all_professor(request, response);
  }
}

export const professorController = new ProfessorController();
