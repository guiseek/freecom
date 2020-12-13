import { Injectable, Renderer2 } from '@angular/core'

export interface IEventHandler {
  element: any
  name: string
  callback: (event?: any) => boolean | void
  dispose: () => void
}

@Injectable({
  providedIn: 'root',
})
export class EventHandler {
  addEvents(renderer: Renderer2, events: IEventHandler[]): void {
    for (let { element, name, dispose, callback } of events)
      dispose = renderer.listen(element, name, (newEvent) => callback(newEvent))
  }

  removeEvents(events: IEventHandler[]): void {
    for (const event of events) if (event.dispose) event.dispose()
  }
}
