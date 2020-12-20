import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'peer-meeting',
  templateUrl: './meeting.container.html',
  styleUrls: ['./meeting.container.scss'],
})
export class MeetingContainer implements OnInit {
  showFiller = false
  constructor() {}

  ngOnInit(): void {}
}
