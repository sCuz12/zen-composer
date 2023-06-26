import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown';
import Container from 'common/components/UI/Container';
// import Button from 'common/components/Button';
import Button from 'common/components/Button';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { Content, DownloadButton, DownloadOptions } from './cta.style';
import bubble1 from 'common/assets/image/webAppCreative/cta-bubble-1.png';
import bubble2 from 'common/assets/image/webAppCreative/cta-bubble-2.png';
import { Subscribe } from '../Banner/banner.style';
import Input from 'common/components/Input';

const menuItemWords = ['Download for MacOS', 'Download for Windows x64'];

const CallToAction = () => {
  const [downloadFor, setDownloadFor] = useState('Download for MacOS');
  const handleSelection = (value, event) => {
    setDownloadFor(value);
  };
  return (
    <Section>
      <img src={bubble1?.src} className="bubble-1" alt="bubble1" />
      <Container width="1400px">
        <Content>
          <Heading content="Get Notified when the product is out " />
          <Text content="Be among the early adopters to gain exclusive access to the app and experience the power of personalized meditations." />
          <Subscribe className="animate__animated animate__fadeInUp">
              <Input
                inputType="email"
                placeholder="Your email"
                iconPosition="left"
                aria-label="email"
            
              />
              <Button className="trail" title="Signup" type="submit" />
          </Subscribe>
          {/* <span>
            <Link href="#">2,500+ Upvote on ProductHunt</Link>
          </span> */}
        </Content>
      </Container>
      <img src={bubble2?.src} className="bubble-2" alt="bubble2" />
    </Section>
  );
};

export default CallToAction;
