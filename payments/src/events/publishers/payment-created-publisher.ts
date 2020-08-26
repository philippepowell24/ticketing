import { Subjects, Publisher, PaymentCreatedEvent } from '@pptickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
