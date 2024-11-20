import { ratsService } from "../services/RatsService";
import BaseController from "../utils/BaseController";

export class RatsController extends BaseController {
    constructor() {
        super('api/rats')
        this.router
            .get('', this.getRats)
            .get('/:ratId/missions', this.getMissionsByRatsId)
    }

    /**
* Posts Missions
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/
    async getMissionsByRatsId(request, response, next) {
        try {
            const ratId = request.params.ratId
            const missions = await ratsService.getMissionsByRatsId(ratId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async getRats(request, response, next) {
        try {
            const rats = await ratsService.getRats()
            response.send(rats)
        } catch (error) {
            next(error)
        }
    }
}