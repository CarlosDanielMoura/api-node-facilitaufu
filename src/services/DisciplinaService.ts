import { Request, Response } from "express";
import api from "../api";
import { AxiosResponse } from "axios";

interface IDisciplina {
  cod_disciplina: number;
  nome: string;
  curso_id: string;
  created_at: string;
}

class DisciplinaService {
  async get_all_disciplinas(request: Request, response: Response) {
    try {
      const disciplinas_response: AxiosResponse<{ disciplina: IDisciplina[] }> =
        await api.get("/disciplina");

      const disciplina = disciplinas_response.data.disciplina;

      if (disciplina.length === 0) {
        response.status(404).json({ message: "Disciplina não encontrada...!" });
      }
      return response.status(200).json(disciplinas_response.data);
    } catch (error) {
      response.status(500).json({
        message: "Falha no servidor, não foi possível encontrar Disciplinas!",
      });
    }
  }
}

export const disciplinaService = new DisciplinaService();
