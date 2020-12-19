import { PeerClient } from '@freecom/peer-core'
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { PeerPhoneService } from '@freecom/peer-phone'
import { uid } from '@freecom/peer-core'
@Component({
  selector: 'sample-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneComponent implements OnInit {
  constructor(private phoneService: PeerPhoneService) {}

  ngOnInit(): void {
    console.log(uid())

    this.phoneService.call()
  }
}
