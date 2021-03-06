import { Publisher, OrderCancelledEvent, Subjects } from '@pptickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
