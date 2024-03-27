import { Request, Response } from "express";
import api from "../api";
import { AxiosResponse } from "axios";

interface IProfessor {
  id_prof: number;
  nome_completo: string;
  email: string;
  sala_professor: string | null;
  ramal: string | null;
  created_at: string;
}

class ProfessorService {
  public async get_all_professor(req: Request, res: Response) {
    try {
      const professor_response: AxiosResponse<{ professor: IProfessor[] }> =
        await api.get("/professor");

      const professor = professor_response.data.professor;
      if (professor.length === 0) {
        return res.status(404).json({
          message: "Nenhum Professor encontrado!",
        });
      }
      return res.status(200).json(professor_response.data);
    } catch (error) {
      res.status(500).json({
        message: "Falha no servidor, não foi possível encontrar Professores!",
      });
    }
  }
}

export const professorService = new ProfessorService();
