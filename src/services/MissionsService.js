import { dbContext } from "../db/DbContext"

class MissionsService {

    async postMissions(missionData) {
        const mission = await dbContext.Missions.create(missionData)

        await mission.populate('location')
        await mission.populate('rat', '-name -picture')

        return mission
    }

    async getMissions() {
        const missions = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
        return missions
    }

}

export const missionsService = new MissionsService()