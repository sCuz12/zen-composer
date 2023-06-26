import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { check } from 'react-icons-kit/feather/check';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import analytics from 'common/assets/image/webAppCreative/analytics.png';
import Section, { Grid, Figure, Content, Features } from './analytics.style';
import parallaxBg from 'common/assets/image/webAppCreative/parallax-1.png';

import { customMeditation } from 'common/data/WebAppCreative';

const CustomMeditation = () => {
  return (
    <Section bgImage={parallaxBg?.src} bgImageAlt="the cat" strength={200}>
      <Container width="1400px">
        <Grid>
          <Fade up>
            <Figure>
              <NextImage src={analytics} alt="analytics" />
            </Figure>
          </Fade>
          <Content>
            <Text className="subtitle" content={customMeditation.slogan} />
            <Heading content={customMeditation.title} />
            <Text className="description" content={customMeditation.desc} />
            <Features>
              {customMeditation.features.map((feat, i) => (
                <li key={i}>
                  <Icon icon={check} size={22} />
                  {feat}
                </li>
              ))}
            </Features>
            <Link href={customMeditation.button.link} className="explore">
              <Button
                title={customMeditation.button.label}
                icon={<Icon icon={ic_keyboard_arrow_right} size={24} />}
              />
            </Link>
          </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default CustomMeditation;
