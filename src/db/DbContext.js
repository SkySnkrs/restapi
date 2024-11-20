import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatsSchema } from '../models/Rats';
import { LocationsSchema } from '../models/Locations';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rats', RatsSchema)
  Locations = mongoose.model('Locations', LocationsSchema)
}

export const dbContext = new DbContext()
