import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();


/*TODO for this project
*
*  work on allowing create user functionality to functions
*  add authentication to creating user
*  work on functionality for recipient can be created
*  1. Authentication
*     create endpoint for user to login
*     create endpoint for user to signup with email , name and password
*     create reset password endpoint
*     create endpoint for verifying user account /verify
*
*
*  2. create endpoint for creating and storing template information and resource
*     create endpoint to retrieve all template resources
*
*
*  3.
* */
