export async function getDevices(deviceKind?: MediaDeviceKind) {
  const filter = ({ kind }) => kind === deviceKind
  const devices = await navigator.mediaDevices.enumerateDevices()
  return deviceKind ? devices.filter(filter) : devices
}

export async function getUserMedia(constraints?: MediaStreamConstraints) {
  return navigator.mediaDevices.getUserMedia(constraints)
}

export async function getDisplayMedia(): Promise<MediaStream> {
  const configuration = { video: true }
  const mediaDevices = navigator.mediaDevices
  if ('getDisplayMedia' in navigator) {
    return (navigator as any).getDisplayMedia(configuration)
  } else if ('getDisplayMedia' in mediaDevices) {
    return (mediaDevices as any).getDisplayMedia(configuration)
  } else {
    return mediaDevices.getUserMedia({
      video: { mediaSourcee: 'screen' },
    } as MediaStreamConstraints)
  }
}
