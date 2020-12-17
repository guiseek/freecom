import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog'
import { PEER_PHONE_CONFIG } from './config/config-injectors'

import { PeerPhoneComponent } from './peer-phone.component'

describe('PeerPhoneComponent', () => {
  let component: PeerPhoneComponent
  let fixture: ComponentFixture<PeerPhoneComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [PeerPhoneComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        {
          provide: PEER_PHONE_CONFIG,
          useValue: { ringtones: { incoming: '' } },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerPhoneComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
