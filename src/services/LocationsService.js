import { dbContext } from "../db/DbContext"

class LocationsService {
    getLocations() {
        const locations = dbContext.Locations.find()
        return locations
    }

}

export const locationsServices = new LocationsService()