import mongoose, { mongo } from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatsSchema } from '../models/Rats';

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rats', RatsSchema)
}

export const dbContext = new DbContext()
