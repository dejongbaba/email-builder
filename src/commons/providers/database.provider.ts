import * as mongoose from "mongoose";


export const DATABASE_PROVIDER = [
  {
    provide:'DATABASE_CONNECTION',
    useFactory: () => {
      return mongoose.connect()
    }
  }
]

