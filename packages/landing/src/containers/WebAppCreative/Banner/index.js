import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Input from 'common/components/Input';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Section, {
  BannerContentWrapper,
  BannerContent,
  Subscribe,
  Figure,
} from './banner.style';
import banner_image from 'common/assets/image/webAppCreative/banner_image_2.png';
import envelope from 'common/assets/image/webAppCreative/icons/envelope.png';
import Alert from 'common/components/Alert';

const Banner = ({signUpHandler,emailChangeHandler,enableSubmit,emailSubmitted}) => {
  return (
    <Section id="home">
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content="Create Your Zen Symphony: Craft Personalized Meditations with Ease!"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Be in the Know: Enter your email below to stay updated on our progress and be the first to access the ultimate meditation customization tool when it's launched!"
            />
              <Subscribe className="animate__animated animate__fadeInUp">
                <Input
                  inputType="email"
                  placeholder="Your email"
                  iconPosition="left"
                  aria-label="email"
                  onChange={emailChangeHandler}
                  icon={<img src={envelope?.src} alt="envelope" />}
                />
                <Button className="disabled:opacity-30" disabled={!enableSubmit} onClick={signUpHandler} title="Signup" type="submit" />
              </Subscribe>
              {emailSubmitted  && (
                <div className='flex w-full justify-center items-center  p-8'>
                  <Alert className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <p>Email Succesfully Submitted </p>
                  </Alert>
                </div>
              )}
           
       
          </BannerContent>
          <Figure className="animate__animated animate__fadeInUp animate__fast">
            <NextImage src={banner_image} alt="dashboard" />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
