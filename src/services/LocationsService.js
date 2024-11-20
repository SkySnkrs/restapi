import { dbContext } from "../db/DbContext"

class LocationsService {


    async getMissionsByLocationId(locationId) {
        const missions = await dbContext.Missions.find({ locationId: locationId }).populate('location').populate('rat', '-name -picture')

        return missions
    }


    getLocations() {
        const locations = dbContext.Locations.find()
        return locations
    }

}

export const locationsServices = new LocationsService()