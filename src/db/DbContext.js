import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatsSchema } from '../models/Rats';
import { LocationsSchema } from '../models/Locations';
import { MissionsSchema } from '../models/Missions';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rats', RatsSchema)
  Locations = mongoose.model('Locations', LocationsSchema)
  Missions = mongoose.model('Missions', MissionsSchema)
}

export const dbContext = new DbContext()
