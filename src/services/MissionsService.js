import { dbContext } from "../db/DbContext"

class MissionsService {
    async getMissions() {
        const missions = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
        return missions
    }

}

export const missionsService = new MissionsService()