/*
Contain information to render left menu,
including name (label), redirect link(url), and icon name(icon)

Contain information to render right menu,
including name (label) and redirect link(url)
*/

const BASE_URL = '/';

const navItems = [
    {
      label: 'Home',
      url: BASE_URL,
      icon: 'Home'

    },
    {
      label: 'Colors',
      url: BASE_URL + 'colors',
      icon: 'Palette'

    },
    {
      label: 'Components',
      url: BASE_URL + 'components',
      icon: 'Widgets',
      subNavItems: [
        {
          label: 'Avatar',
          url: BASE_URL + 'components/avatar',
          icon: 'NavigateNext'

        },
        {
          label: 'Button',
          url: BASE_URL + 'components/button',
          icon: 'NavigateNext'

        },
        {
          label: 'Dialog',
          url: BASE_URL + 'components/dialog',
          icon: 'NavigateNext'

        },
        {
          label: 'Markdown',
          url: BASE_URL + 'components/markdown',
          icon: 'NavigateNext'

        },
        {
          label: 'Notification',
          url: BASE_URL + 'components/notification',
          icon: 'NavigateNext'

        },
        {
          label: 'Progress',
          url: BASE_URL + 'components/progress',
          icon: 'NavigateNext'

        },
        {
          label: 'Search Field',
          url: BASE_URL + 'components/searchfield',
          icon: 'NavigateNext'
        },
        {
          label: 'Spinner',
          url: BASE_URL + 'components/spinner',
          icon: 'NavigateNext'

        },
        {
          label: 'Table',
          url: BASE_URL + 'components/table',
          icon: 'NavigateNext'

        },
      ]
    },
    {
      label: 'Charts',
      url: BASE_URL + 'charts',
      icon: 'Timeline',
      subNavItems: [
        {
          label: 'Area',
          url: BASE_URL + 'charts/area',
          icon: 'NavigateNext'

        },
        {
          label: 'Circular Grid Line',
          url: BASE_URL + 'charts/circulargridline',
          icon: 'NavigateNext'

        },
        {
          label: 'Line',
          url: BASE_URL + 'charts/line',
          icon: 'NavigateNext'

        },
        {
          label: 'Pie',
          url: BASE_URL + 'charts/pie',
          icon: 'NavigateNext'

        },
        {
          label: 'Scatter Plot',
          url: BASE_URL + 'charts/scatterplot',
          icon: 'NavigateNext'

        },
        {
          label: 'Vertical Bar',
          url: BASE_URL + 'charts/verticalbar',
          icon: 'NavigateNext'
        },
      ]
    },
    {
      label: 'Iconography',
      url: BASE_URL + 'icons',
      icon: 'BlurOn'

    }
];

const rightMenu = [
  {
    label: 'Material-UI',
    link: 'https://material-ui.com/'
  },
  {
    label: 'React',
    link: 'https://reactjs.org/'
  },
  {
    label: 'React-Vis',
    link: 'https://github.com/uber/react-vis'
  },
];


export default {navItems,rightMenu}
