import {
  Input,
  OnInit,
  Output,
  Component,
  EventEmitter,
  HostListener,
} from '@angular/core'
import { EventHandler, Fullscreen } from '../utilities'

@Component({
  selector: 'peer-fullscreen',
  templateUrl: './fullscreen.button.html',
})
export class FullscreenButton implements OnInit {
  canFullscreen = false

  @Input() player: HTMLVideoElement

  @Input() fullscreen = false

  @Output() fullscreenChanged = new EventEmitter<boolean>()

  @Input() keyboard = true

  constructor(private fscreen: Fullscreen, private evt: EventHandler) {}

  ngOnInit(): void {
    if (this.fscreen.isEnabled()) {
      this.canFullscreen = true
    }

    this.fscreen.onChange(() => {
      this.fscreen.isFullscreen()
        ? this.onChangesFullscreen(true)
        : this.onChangesFullscreen(false)
    })
  }

  setFullscreen(value: boolean) {
    if (this.canFullscreen && this.fullscreen !== value) {
      this.toggleFullscreen()
    }
  }

  toggleFullscreen(): void {
    this.fullscreen = !this.fullscreen
    this.updateFullscreen()
  }

  updateFullscreen(): void {
    this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit()
    this.fullscreenChanged.emit(this.fullscreen)
  }

  onChangesFullscreen(value: boolean): void {
    this.fullscreen = value
    this.fullscreenChanged.emit(this.fullscreen)
  }

  @HostListener('document:keyup.f', ['$event'])
  onFullscreenKey(event: KeyboardEvent) {
    if (this.keyboard) {
      this.toggleFullscreen()
      event.preventDefault()
    }
  }
}
