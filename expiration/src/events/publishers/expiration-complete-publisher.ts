import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@pptickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
