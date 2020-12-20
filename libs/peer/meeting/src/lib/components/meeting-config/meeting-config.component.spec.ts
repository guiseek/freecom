import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MeetingConfigComponent } from './meeting-config.component'

describe('MeetingConfigComponent', () => {
  let component: MeetingConfigComponent
  let fixture: ComponentFixture<MeetingConfigComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetingConfigComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingConfigComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
