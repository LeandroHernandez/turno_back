import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SUBSCRIPTION } from 'src/common/models/models';
import { SubscriptionSchema } from './schema/subscription.schema';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: SUBSCRIPTION.name,
        useFactory: () => {
          return SubscriptionSchema;
        },
      },
    ]),
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
