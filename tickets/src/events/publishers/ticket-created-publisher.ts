import { Publisher, Subjects, TicketCreatedEvent } from '@pptickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
