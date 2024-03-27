import { Request, Response } from "express";
import api from "../api";
import { AxiosResponse } from "axios";

interface ICurso {
  cod_curso: number;
  nome: string;
  created_at: string;
}

class CursoService {
  async get_all_cursos(request: Request, response: Response) {
    try {
      const curso_response: AxiosResponse<{ cursos: ICurso[] }> = await api.get(
        "/cursos"
      );
      const cursos = curso_response.data.cursos;

      if (cursos.length === 0) {
        return response.status(404).json({ message: "Curso não encontrado!" });
      }
      return response.status(200).json(cursos);
    } catch (error) {
      response.status(500).json({
        message: "Falha no servidor, não foi possível encontrar Cursos!",
      });
    }
  }
}
export const cursoService = new CursoService();
