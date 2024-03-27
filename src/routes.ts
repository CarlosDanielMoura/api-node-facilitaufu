import express from "express";

import { horarioOnibusController } from "./controllers/HorarioOnibusController";
import { editalController } from "./controllers/EditalController";
import { professorController } from "./controllers/ProfessorController";
import { atividadeAcademicaController } from "./controllers/AtividadeAcademicaController";
import { cursoController } from "./controllers/CursoController";
import { disciplinaController } from "./controllers/DisciplinaController";
import { horarioController } from "./controllers/HorarioController";

const routes = express.Router();

routes.get("/horario-onibus", horarioOnibusController.get_horario_onibus);
routes.get("/edital", editalController.get_edital);
routes.get("/professor", professorController.get_professor);
routes.get(
  "/atividade_academicas",
  atividadeAcademicaController.get_atividade_academica
);
routes.get("/cursos", cursoController.get_curso);
routes.get("/disciplina", disciplinaController.get_disciplinas);
routes.get("/horario", horarioController.get_horario);

export default routes;
