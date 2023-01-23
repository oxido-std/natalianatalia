import * as dotenv from 'dotenv'
dotenv.config()

export const EnvConfiguration = () =>({

    db_name:process.env.MONGODB_NAME,
    db_host:process.env.MONGODB_HOST,
    db_port:process.env.MONGODB_PORT,
    db_user:process.env.MONGODB_USERNAME,
    db_password:process.env.MONGODB_NAME,

});