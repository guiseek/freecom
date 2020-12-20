import { Component, OnInit } from '@angular/core'
import { PeerMeeting } from '@freecom/peer-meeting'
import { Meeting } from './meeting'

@Component({
  selector: 'sample-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent implements OnInit {
  constructor(private service: PeerMeeting) {}

  ngOnInit(): void {}

  open() {
    this.service.create().subscribe((response) => {
      console.log(response)
      if (response) {
        const meeting = new Meeting(response)

        meeting.send({
          offerToReceiveAudio: true,
          offerToReceiveVideo: true,
        })

        meeting.message$.subscribe((message) => {
          console.log('message: ', message)
        })
      }
    })
  }
}
