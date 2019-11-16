import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { Container } from './blocks'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      ${props => (props.section === 'additionalSupport' ? 128 : 192)}px,
      1fr
    )
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 5 : 3)}rem;
    ${props =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const data = {
  sponsors: [
    {
      name: 'New Relic',
      link: 'https://newrelic.com/',
      image: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fnewrelic.png?v=1573916104956'
    },
    {
      name: 'Human Code',
      link: 'https://humancode.ca/',
      image: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fhumancode.PNG?v=1573916108859'
    },
    {
      name: 'Zeit',
      link: 'https://www.zeit.co',
      image: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fpasted%20image%200.png?v=1573600736606'
    },
    {
      name:'Voiceflow',
      link: 'https://www.voiceflow.com/',
      image: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fvoiceflow.png?v=1571862832639'
    },
    {
      name:'Balsamiq',
      link: 'https://balsamiq.com/',
      image: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fbalsamiq-logo-screen.svg?v=1572300229220'
    },   
  ],
  additionalSupport: [
    {
      name: 'Hack Club',
      link: 'https://hackclub.com',
      image: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fhackclub.png?v=1570570408172'
    }
    
  ]
}

const Sponsors = props => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} {...props}>
      {data[props.section || 'sponsors'].map(sponsor => (
        <a href={`${sponsor.link}`}>
          <img
            alt={sponsor.name}
            src={sponsor.image}
            key={sponsor.image}
          />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
