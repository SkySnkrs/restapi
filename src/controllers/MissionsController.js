import { missionsService } from "../services/MissionsService";
import BaseController from "../utils/BaseController";

export class MissionsController extends BaseController {
    constructor() {
        super('api/missions')
        this.router
            .get('', this.getMissions)
            .post('', this.postMissions)
    }

    /**
* Posts Missions
* @param {import("express").Request} request
* @param {import("express").Response} response
* @param {import("express").NextFunction} next
*/

    async postMissions(request, response, next) {
        try {
            const missionData = request.body
            const missions = await missionsService.postMissions(missionData)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async getMissions(request, response, next) {
        try {
            const missions = await missionsService.getMissions()
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }
}