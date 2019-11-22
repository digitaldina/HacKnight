import { Image } from 'rebass'

export default ({ size = 32, light = false, ...props }) => (
  <Image
    {...props}
    src={`https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fcrescent-moon.svg?v=1574437998711`}
    alt="HackNight avatar"
    width={size}
    height={size}
  />
)
