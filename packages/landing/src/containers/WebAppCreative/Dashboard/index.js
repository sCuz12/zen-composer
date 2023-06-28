import React from 'react';
import { Tab, TabList, TabPanel } from 'react-tabs';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, { SectionHeading, ReactTabs } from './dashboard.style';

import { dashboard } from 'common/data/WebAppCreative';

const Dashboard = () => {
  return (
    <Section id="meditations">
      <Container width="1400px">
        <SectionHeading>
          <Heading content={dashboard.sectionTitle} />
          <Text content={dashboard.sectionDesc} />
        </SectionHeading>
        <ReactTabs>
          <nav>
            <TabList>
              {dashboard.tabs.map((tab) => (
                <Tab key={tab.id}>{tab.title}</Tab>
              ))}
            </TabList>
          </nav>
          <div className='pt-24'>

   
          {dashboard.tabs.map((tab) => (
            < div className='flex items-center justify-center'>
              <TabPanel key={tab.id}>
                <figure className="animate__animated animate__fadeInUp">
                  <NextImage src={tab.content.image} alt={tab.title} />
                </figure>
                <div>
                <audio controls>
                  <source src={tab.content.voice} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              </TabPanel>
            </div>
          ))}
                 </div>
        </ReactTabs>
      </Container>
    </Section>
  );
};

export default Dashboard;
