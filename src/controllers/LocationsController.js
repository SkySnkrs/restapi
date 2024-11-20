import { locationsServices } from "../services/LocationsService"
import BaseController from "../utils/BaseController"

export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.getLocations)
            .get('/:locationId/missions', this.getMissionsByLocationId)
    }

    async getMissionsByLocationId(request, response, next) {
        try {
            const locationId = request.params.locationId
            const missions = await locationsServices.getMissionsByLocationId(locationId)
            response.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async getLocations(request, response, next) {
        try {
            const locations = await locationsServices.getLocations()
            response.send(locations)
        } catch (error) {
            next(error)
        }
    }
}