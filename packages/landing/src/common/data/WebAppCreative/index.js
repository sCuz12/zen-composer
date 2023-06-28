import envato from 'common/assets/image/webAppCreative/clients/envato.png';
import evernote from 'common/assets/image/webAppCreative/clients/evernote.png';
import forbes from 'common/assets/image/webAppCreative/clients/forbes.png';
import geekwire from 'common/assets/image/webAppCreative/clients/geekwire.png';
import slack from 'common/assets/image/webAppCreative/clients/slack.png';
import usaToday from 'common/assets/image/webAppCreative/clients/usa-today.png';
import icon1 from 'common/assets/image/webAppCreative/icons/custom_icon.svg';
import icon2 from 'common/assets/image/webAppCreative/icons/voice_icon.svg';
import icon3 from 'common/assets/image/webAppCreative/icons/ai_icon.svg';
import icon4 from 'common/assets/image/webAppCreative/icons/listen_icon.svg';
import icon5 from 'common/assets/image/webAppCreative/icons/5.png';
import icon6 from 'common/assets/image/webAppCreative/icons/6.png';
import icon7 from 'common/assets/image/webAppCreative/icons/7.png';
import mindfulness_icon from 'common/assets/image/webAppCreative/icons/mindfulness.png';
import breathing_icon from 'common/assets/image/webAppCreative/icons/breathing.png';
import gratitude_icon from 'common/assets/image/webAppCreative/icons/gratitude.png';
import relaxation_icon from 'common/assets/image/webAppCreative/icons/relaxation.png';
import asana from 'common/assets/image/webAppCreative/icons/asana.png';
import drive from 'common/assets/image/webAppCreative/icons/drive.png';
import dropbox from 'common/assets/image/webAppCreative/icons/dropbox.png';
import fontAwesome from 'common/assets/image/webAppCreative/icons/fontawesome.png';
import github from 'common/assets/image/webAppCreative/icons/github.png';
import googleCloud from 'common/assets/image/webAppCreative/icons/google-cloud.png';
import messenger from 'common/assets/image/webAppCreative/icons/messenger.png';
import nginx from 'common/assets/image/webAppCreative/icons/nginx.png';
import slack2 from 'common/assets/image/webAppCreative/icons/slack.png';
import smashingMag from 'common/assets/image/webAppCreative/icons/smashing-mag.png';
import zeplin from 'common/assets/image/webAppCreative/icons/zeplin.png';
import zoom from 'common/assets/image/webAppCreative/icons/zoom.png';
import icecream from 'common/assets/image/webAppCreative/icons/icecream.png';
import donut from 'common/assets/image/webAppCreative/icons/donut.png';
import pizza from 'common/assets/image/webAppCreative/icons/pizza.png';
import post1 from 'common/assets/image/webAppCreative/post1.png';
import post2 from 'common/assets/image/webAppCreative/post2.png';
import post3 from 'common/assets/image/webAppCreative/post3.png';
import siteLogo from 'common/assets/image/webAppCreative/logo.png';
import facebook from 'common/assets/image/webAppCreative/icons/facebook.png';
import twitter from 'common/assets/image/webAppCreative/icons/twitter.png';
import dribbble from 'common/assets/image/webAppCreative/icons/dribbble.png';

export const menu_items = [
  {
    label: 'Home',
    path: '#home',
    offset: '70',
  },
  {
    label: 'How To',
    path: '#how-to',
    offset: '70',
  },
  {
    label: 'Meditations',
    path: '#meditations',
    offset: '70',
  },
  {
    label: 'Faq',
    path: '#faq',
    offset: '70',
  },
];

export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];

export const howTos = [
  {
    id: 1,
    icon: icon1,
    title: 'Select Your Meditation Style',
    text: `Choose from a variety of meditation styles that align with your intentions and goals.`,
    linkLabel: 'Learn More',
    link: '#',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Select Your Voice',
    text: `Find the perfect voice to guide you through your meditation journey.`,
    linkLabel: 'Learn More',
    link: '#',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Let the AI Generate Your Meditation ',
    text: `AI seamlessly combines your chosen meditation style, voice selection, and custom inputs to create a meditation experience crafted specifically for you.`,
    linkLabel: 'Learn More',
    link: '#',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Get Your Voice-Generated Meditation',
    text: `Receive your voice-generated meditation in an instant. Enjoy a transformative meditation experience that combines the selected style, voice, and personalized script. `,
    linkLabel: 'Learn More',
    link: '#',
  },
];

export const customMeditation = {
  slogan: 'Customize your meditations',
  title: ' Personalize Your Meditation Experience',
  desc: `Choose your preferred meditation style and let our advanced AI technology generate personalized meditation scripts just for you.`,
  features: [
    'Choose from a variety of meditation styles, including mindfulness, trauma healing, gratitude, and more',
    'Personalize your meditation experience by selecting your desired style to align with your intentions and goals',
    'Discover the power of personalized meditations that address specific areas of focus, such as mindfulness, healing, or cultivating gratitude',
  ],
  button: {
    link: '#',
    label: 'Explore More',
  },
};

export const dashboard = {
  sectionTitle: 'Embark on a Journey of Personalized Meditations with ZenComposer Creations',
  sectionDesc: `Indulge in Tailor-Made Meditations. Find Serenity in Every Breath. Experience Meditations Like Never Before. Your Journey to Inner Peace Begins Here`,
  tabs: [
    {
      id: 1,
      title: 'Mindfulness',
      content: {
        image: mindfulness_icon,
        voice : "/meditations/mindfulness.mp3"
      },
    },
    {
      id: 2,
      title: 'Graditute',
      content: {
        image: gratitude_icon,
        voice : "/meditations/gratitude.mp3"
      },
    },
    {
      id: 3,
      title: 'Breathing',
      content: {
        image: breathing_icon,
        voice : "/meditations/breathing.mp3"
      },
    },
    {
      id: 4,
      title: 'Relaxation',
      content: {
        image: relaxation_icon,
        voice : "/meditations/mindfulness.mp3"
      },
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    logo: icon5,
    author: 'Johnny Simpson',
    designation: 'Head of Design',
    quote: `Each room is loaded with the most collaborative surfaces so you can quickly take notes, capture to-dos, and share ideas. Pick one of our stock themes, or create your custom theme with the editors.`,
  },
  {
    id: 2,
    logo: icon6,
    author: 'Deanna Hodges',
    designation: 'Business HR Admin',
    quote: `We deliver on such an expansive with innovation agenda with so many theme projects going on at any time, it can be hard to maintain momentum. So We appreciate to work with them.`,
  },
  {
    id: 3,
    logo: icon7,
    author: 'Gracelyn Mason',
    designation: 'Senior Marketer',
    quote: `Flat item is loaded with the most of collaborative surfaces so you can do quickly take notes, capture to-dos, and share ideas. Pick one of our stock themes, or create your custom theme with statics.`,
  },
  {
    id: 4,
    logo: icon5,
    author: 'Gracelyn Mason',
    designation: 'Senior Marketer',
    quote: `Flat item is loaded with the most of collaborative surfaces so you can do quickly take notes, capture to-dos, and share ideas. Pick one of our stock themes, or create your custom theme with statics.`,
  },
];

export const appIntegration = {
  sectionTitle: 'Lets see what we integrate',
  sectionDesc: `We recently had to jump on 10+ different plugin across eight different countries to find the right owner and escalation process.`,
  apps: [
    {
      id: 1,
      icon: nginx,
      name: 'nginx',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 2,
      icon: googleCloud,
      name: 'googleCloud',
      bgColor: '#fff',
      isBlurred: false,
    },
    {
      id: 3,
      icon: slack2,
      name: 'slack',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 4,
      icon: dropbox,
      name: 'dropbox',
      bgColor: '#fff',
      isBlurred: false,
    },
    {
      id: 5,
      icon: drive,
      name: 'drive',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 6,
      icon: asana,
      name: 'asana',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 7,
      icon: github,
      name: 'github',
      bgColor: '#fff',
      isBlurred: false,
    },
    {
      id: 8,
      icon: zeplin,
      name: 'zeplin',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 9,
      icon: nginx,
      name: 'nginx',
      bgColor: null,
      isBlurred: true,
    },
    {
      id: 10,
      icon: messenger,
      name: 'messenger',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 11,
      icon: zoom,
      name: 'zoom',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 12,
      icon: smashingMag,
      name: 'smashingMag',
      bgColor: '#fff',
      isBlurred: false,
    },
    {
      id: 13,
      icon: fontAwesome,
      name: 'fontAwesome',
      bgColor: null,
      isBlurred: false,
    },
    {
      id: 14,
      icon: drive,
      name: 'google drive',
      bgColor: null,
      isBlurred: true,
    },
  ],
};

export const pricing = [
  {
    id: 1,
    price: {
      monthly: 16,
      annual: 16 * 12 - 5,
    },
    currencySymbol: '$',
    isActive: false,
    title: 'Starter Pack',
    desc: 'Complete time tracking & proper reporting',
    icon: icecream,
    button: {
      label: 'Start 6 month trial',
      link: '#',
    },
    details: {
      label: 'What’s include',
      link: '#',
    },
  },
  {
    id: 2,
    price: {
      monthly: 29,
      annual: 29 * 12 - 10,
    },
    currencySymbol: '$',
    isActive: true,
    title: 'Premium Pack',
    desc: 'Effortless team with time management.',
    icon: donut,
    button: {
      label: 'Start 6 month trial',
      link: '#',
    },
    details: {
      label: 'What’s include',
      link: '#',
    },
  },
  {
    id: 3,
    price: {
      monthly: 35,
      annual: 35 * 12 - 15,
    },
    currencySymbol: '$',
    isActive: false,
    title: 'Ultimate Pack',
    desc: 'A custom plan for complex or large organization.',
    icon: pizza,
    button: {
      label: 'Start 6 month trial',
      link: '#',
    },
    details: {
      label: 'What’s include',
      link: '#',
    },
  },
];

export const posts = [
  {
    id: 1,
    date: 'June 3, 2020',
    image: post1,
    title: 'The three Fundamental Rules to Keep Your Website Goal Orientated',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 2,
    date: 'Dec 8, 2020',
    image: post2,
    title: 'Five Common Mistakes Teams Make When Tracking Performance',
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
  {
    id: 3,
    date: 'Dec 8, 2020',
    image: post3,
    title: `Why You Might Want to Reconsider with Tracking First Meaningful Paint`,
    excerpt: {
      label: 'Learn More',
      link: '#',
    },
  },
];

export const faqs = [
  {
    id: 1,
    title: '01. What is Zencomposer?',
    description: `Zencomposer is a web app that empowers you to craft custom meditations tailored to your preferences. With just a few simple inputs, such as meditation style, desired voice, and background music, ZenComposer's AI technology generates a unique meditation script and brings it to life in a soothing, AI-generated voice. Experience the joy of creating personalized meditations that resonate with your inner self and enhance your meditation practice.`,
  },
  {
    id: 2,
    title: '02. WHow does Zencomposer work?',
    description: `ZenComposer utilizes an intuitive form where users can select their desired meditation style, voice, and background music. The artificial intelligence algorithm then generates a unique meditation script and delivers it in the chosen voice. Users can further customize their experience to create a personalized meditation session.`,
  },
  {
    id: 3,
    title: '03. What types of meditation styles are available?',
    description: `Zencomposer provides a diverse range of meditation styles to cater to different needs and preferences. From mindfulness and gratitude to trauma healing and happiness, you can choose the style that aligns with your goals and intentions.`,
  },
  {
    id: 4,
    title: '04. Is Zencomposer suitable for beginners?',
    description: `Yes, ZenComposer is designed to accommodate both beginners and experienced meditators. The user-friendly interface and customizable features make it easy for beginners to create and enjoy personalized meditation sessions. Additionally, guided meditation options are available to provide support and guidance for those new to meditation.`,
  },
  {
    id: 5,
    title: '05. How can I stay updated on ZenComposers progress?',
    description: `To stay informed about the latest updates, releases, and exciting developments with ZenComposer, you can sign up for our newsletter. Simply enter your email in the form provided, and we'll keep you in the loop!`,
  },
];

export const footerTop = {
  about: {
    logo: siteLogo,
    text: `We run Advanced Search reports on the criteria you care about to see how work is progressing and where to focus your effort.`,
  },
  widgets: [
    {
      id: 2,
      title: 'About Us',
      list: [
        {
          id: 1,
          title: 'Support Center',
          link: '#',
        },
        {
          id: 2,
          title: 'Customer Support',
          link: '#',
        },
        {
          id: 3,
          title: 'About Us',
          link: '#',
        },
        {
          id: 4,
          title: 'Copyright',
          link: '#',
        },
        {
          id: 5,
          title: 'Popular Campaign',
          link: '#',
        },
      ],
    },
    {
      id: 3,
      title: 'Our Information',
      list: [
        {
          id: 1,
          title: 'Return Policy ',
          link: '#',
        },
        {
          id: 2,
          title: 'Privacy Policy',
          link: '#',
        },
        {
          id: 3,
          title: 'Terms & Conditions',
          link: '#',
        },
        {
          id: 4,
          title: 'Site Map',
          link: '#',
        },
        {
          id: 5,
          title: 'Store Hours',
          link: '#',
        },
      ],
    },
    {
      id: 4,
      title: 'My Account',
      list: [
        {
          id: 1,
          title: 'Press inquiries',
          link: '#',
        },
        {
          id: 2,
          title: 'Social media ',
          link: '#',
        },
        {
          id: 3,
          title: 'directories',
          link: '#',
        },
        {
          id: 4,
          title: 'Images & B-roll',
          link: '#',
        },
        {
          id: 5,
          title: 'Permissions',
          link: '#',
        },
      ],
    },
  ],
  contactInfo: {
    email: `georgehadjisavvas12@gmail.com`,
  },
};

export const footer = {
  copyright: `Copyright © ${new Date().getFullYear()} Superprops. All rights reserved`,
  nav: [
    {
      id: 1,
      title: 'Support',
      link: '#',
    },
    {
      id: 2,
      title: 'Hiring',
      link: '#',
    },
    {
      id: 3,
      title: 'Privacy',
      link: '#',
    },
    {
      id: 4,
      title: 'Terms',
      link: '#',
    },
  ],
  socialLinks: [
    {
      id: 1,
      link: 'http://facebook.com',
      icon: facebook,
      label: 'Facebook',
    },
    {
      id: 2,
      link: 'http://twitter.com',
      icon: twitter,
      label: 'Twitter',
    },
    {
      id: 3,
      link: 'http://dribbble.com',
      icon: dribbble,
      label: 'Dribbble',
    },
  ],
};
