import { InjectionToken } from '@angular/core'
import { MeetingConfig, meetingConfig } from './meeting-config'

export const MEETING_CONFIG = new InjectionToken<MeetingConfig>(
  'PeerMeetingConfiguration'
)

export function mergeConfig({ rtc, media, socket }: MeetingConfig) {
  return {
    rtc: Object.assign(meetingConfig.rtc, rtc),
    media: Object.assign(meetingConfig.media, media),
    socket: Object.assign(meetingConfig.socket, socket),
  }
}
