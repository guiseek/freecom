import {
  Input,
  Output,
  Component,
  ViewChild,
  OnDestroy,
  Renderer2,
  ElementRef,
  EventEmitter,
  AfterViewInit,
} from '@angular/core'
import { ThemePalette } from '@angular/material/core'
import { IEventHandler, EventHandler } from './utilities/event-handler'

@Component({
  selector: 'peer-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('player') private player!: ElementRef<HTMLDivElement>
  @ViewChild('video') private video!: ElementRef<HTMLVideoElement>

  @Input() src!: string

  @Input() srcObject: MediaStream

  @Input() title!: string
  @Input() autoplay = true
  @Input() preload = true
  @Input() quality = true
  @Input() fullscreen = true

  @Input() stream = true

  @Input() poster: string
  @Input() color: ThemePalette = 'primary'

  @Input() keyboard = false
  @Input() overlay!: boolean
  @Input() muted = false
  @Output() mutedChange = new EventEmitter<boolean>()

  playing = false

  isFullscreen = false

  @Input() videoWidth!: number
  @Input() videoHeight!: number
  lastTime!: number

  videoLoaded = false

  private isMouseMoving = true
  private isMouseMovingTimer!: number
  private isMouseMovingTimeout = 2000

  private events!: IEventHandler[]

  constructor(private renderer: Renderer2, private evt: EventHandler) {}

  ngAfterViewInit(): void {
    this.events = [
      {
        element: this.video?.nativeElement,
        name: 'loadstart',
        callback: (event) => (this.videoLoaded = false),
        dispose: () => {},
      },
      {
        element: this.video?.nativeElement,
        name: 'loadedmetadata',
        callback: (event) => this.evLoadedMetadata(event),
        dispose: () => {},
      },
      {
        element: this.video?.nativeElement,
        name: 'error',
        callback: (event) => console.error('Unhandled Video Error', event),
        dispose: () => {},
      },
      {
        element: this.video?.nativeElement,
        name: 'contextmenu',
        callback: (event) => event.preventDefault(),
        dispose: () => {},
      },
      {
        element: this.player?.nativeElement,
        name: 'mousemove',
        callback: (event) => this.evMouseMove(event),
        dispose: () => {},
      },
    ]

    if (!!this.video && this.video.nativeElement) {
      this.video.nativeElement.addEventListener(
        'loadeddata',
        () => (this.videoLoaded = true)
      )
    }

    this.evt.addEvents(this.renderer, this.events)
  }

  evLoadedMetadata(event: any): void {
    this.videoWidth = this.video.nativeElement.videoWidth
    this.videoHeight = this.video.nativeElement.videoHeight
    this.videoLoaded = true
  }

  evMouseMove(event: any): void {
    this.isMouseMoving = true
    clearTimeout(this.isMouseMovingTimer)
    this.isMouseMovingTimer = window.setTimeout(() => {
      this.isMouseMoving = false
    }, this.isMouseMovingTimeout)
  }

  getOverlayClass(activeClass: string, inactiveClass: string): any {
    if (this.overlay === null) {
      return !this.playing || this.isMouseMoving ? activeClass : inactiveClass
    } else {
      return this.overlay ? activeClass : inactiveClass
    }
  }

  load(): void {
    if (this.video && this.video.nativeElement) this.video.nativeElement.load()
  }

  getVideoTag(): HTMLVideoElement {
    return (
      (this.video && this.video.nativeElement) ??
      (this.video.nativeElement as HTMLVideoElement)
    )
  }

  ngOnDestroy(): void {
    this.video.nativeElement.onloadeddata = null

    this.evt.removeEvents(this.events)

    if (this.srcObject) {
      this.srcObject.getTracks().forEach((t) => t.stop())
    }
  }
}
