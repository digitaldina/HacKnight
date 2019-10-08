import { Box, Flex, Text, Link as A } from 'rebass'
import { Styled, useColorMode } from 'theme-ui'
import Link from 'next/link'
import Icon from './icon'
import Avatar from './avatar'

export default props => {
  const [mode, setMode] = useColorMode()

  return (
    <>
      <Flex
        as="header"
        variant="container"
        sx={{
          alignItems: 'center',
          color: '#000000',
          px: 3,
          py: 3
        }}
      >
        <Avatar light size={48} sx={{ mr: 3 }} />
        <Link href="/">
          <A variant="styles.navitem" 
            sx={{
                fontFamily: 'Orbitron',
                  fontSize: 28
            }}>HacKnight</A>
        </Link>
        {/*spaces out the logo from buttons on right, to link to div just make divs in index.mdx w id's and then link httpsL//hackknight.glitch.me/# ____*/}
        <Box sx={{ mx: 'auto' }} />
       <A
          href="#schedule"
          variant="styles.navitem"
          sx={{ mr: [3, 1] }}
        >
          Schedule
        </A>
         <Box sx={{ mx: '2' }} />
       <A
          href="#venue"
          variant="styles.navitem"
          sx={{ mr: [3, 1] }}
        >
          Venue
        </A>
        <Box sx={{ mx: '2' }} />
       <A
          href="#faq"
          variant="styles.navitem"
         sx={{ mr: [3, 1] }}
        >
          FAQs
        </A>
        <Box sx={{ mx: '2' }} />
       <A
          href="#contact"
          variant="styles.navitem"
          sx={{ mr: [1, 4] }}
        >
          Contact Us
        </A>
       
      </Flex>
      <Box
        as="main"
        sx={{
          width: '100%',
          mx: 'auto',
          flex: '1 1 auto'
        }}
      >
        {props.children}
      </Box>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto'
        }}
      >
        <Box
          variant="container"
          sx={{
            // display: 'grid',
            // gridGap: [3, 4],
            // gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
            fontSize: 0,
            py: 3
          }}
        >
          <Flex id="contact" sx={{ justifyContent: 'center' }}>
            <A
              href="#"
              title="Twitter"
              sx={{ mx: 2 }}
            >
              <Icon glyph="twitter" size={36} />
            </A>
            <A
              href="#"
              title="Facebook"
              sx={{ mx: 2 }}
            >
              <Icon glyph="facebook" size={36} />
            </A>
            <A href="#" title="GitHub" sx={{ mx: 2 }}>
              <Icon glyph="github" size={36} />
            </A>
            <A
              href="#"
              title="Instagram"
              sx={{ mx: 2 }}
            >
              <Icon glyph="instagram" size={36} />
            </A>
            <A href="mailto:contact@hackknight.tech" title="Email" sx={{ mx: 2 }}>
              <Icon glyph="email" size={36} />
            </A>
          </Flex>
          <Box
            sx={{
              mt: [3, 4],
              textAlign: 'center',
              a: { fontSize: 1 }
            }}
          >
            Site by 
            <A
              href="https://lachlanjc.me"
              target="_blank"
              variant="styles.navitem"
              sx={{margin: 1}}
            > @lachlanjc 
            </A>
            and
            <A
              href="https://dinaelhanan.com"
              target="_blank"
              variant="styles.navitem"
              sx={{margin: 1}}
            >
              @dinaelhanan
            </A>💖 
          
          </Box>
        </Box>
      </Box>
    </>
  )
}
