import { Publisher, Subjects, TicketUpdatedEvent } from '@pptickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
