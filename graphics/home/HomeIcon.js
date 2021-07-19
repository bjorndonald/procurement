import React from 'react'
import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg'

function HomeIcon (props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox='0 0 172 172'
      fill='#fff'
      xmlns='http://www.w3.org/2000/svg'>
      <Path
        d='M150.5 143.333C150.5 145.234 149.745 147.057 148.401 148.401C147.057 149.745 145.234 150.5 143.333 150.5H28.6667C26.766 150.5 24.9431 149.745 23.5991 148.401C22.2551 147.057 21.5 145.234 21.5 143.333V68.0116C21.4992 66.9195 21.7481 65.8417 22.2275 64.8605C22.707 63.8792 23.4043 63.0205 24.2663 62.35L81.5997 17.759C82.8577 16.7803 84.4061 16.249 86 16.249C87.5939 16.249 89.1423 16.7803 90.4003 17.759L147.734 62.35C148.596 63.0205 149.293 63.8792 149.772 64.8605C150.252 65.8417 150.501 66.9195 150.5 68.0116V143.333V143.333ZM136.167 136.167V71.509L86 32.4936L35.8333 71.509V136.167H136.167ZM50.1667 107.5H121.833V121.833H50.1667V107.5Z'
        fill='black'
      />
    </Svg>
  )
}

export default HomeIcon
