import {Router} from "express";
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";

const router = Router();
// Fiz a instancia do meu controler e já instancie com o metdo handle (recebe o request e response)
router.post("/authenticate", new AuthenticateUserController().handle)

export { router }