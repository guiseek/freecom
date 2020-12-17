type RingtoneKey = 'incoming' | 'outgoing' | 'calling'

export interface PeerPhoneConfig {
  ringtones?: Partial<Record<RingtoneKey, string>>
}

export const peerPhoneConfig: PeerPhoneConfig = {
  ringtones: {
    calling: '',
    incoming: '',
    outgoing: '',
  },
}
