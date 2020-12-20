import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Component, Inject, OnInit } from '@angular/core'
import { ConfigurationForm } from '../../forms'
import { MeetingConfig } from '../../config'
import { getDevices } from '@freecom/peer-core'

@Component({
  selector: 'peer-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {
  constructor() {}

  async ngOnInit() {}
}
