import { dbContext } from "../db/DbContext"

class RatsService {

    async getMissionsByRatsId(ratId) {
        const missions = await dbContext.Missions.find({ ratId: ratId })
        return missions
    }

    async getRats() {

        const rats = await dbContext.Rats.find()
        return rats

    }
}

export const ratsService = new RatsService()