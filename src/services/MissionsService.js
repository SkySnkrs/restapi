import { dbContext } from "../db/DbContext"

class MissionsService {

    async putMissions(missionId, missionData) {
        const missionToUpdate = await dbContext.Missions.findById(missionId)

        missionToUpdate.completed = missionData.completed

        await missionToUpdate.save()
        return missionToUpdate
    }

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