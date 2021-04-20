import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/**
 * Parameters types:
 * Routes Params => Route parameters;
 * http://localhost:3333/settings/1   (in this case 1 is the param)
 * Query Params => filter and searches;
 * http://localhost:3333/settings/1?search=something (used to filter and search)
 * Body Params => passed as json in the requests
 * {
 *  cors, etc...
 * }
 */

routes.post("/settings", async (request, response) => {
  const { chat, username } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username,
  });

  await settingsRepository.save(settings);

  return response.json(settings);
})

export { routes };