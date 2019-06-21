export const HANDLE_CHANGE = 'HANDLE_CHANGE';

const initialState = {
  navLinks: [
    {
      text: 'Docs',
      route: '/documentation'
    },
    {
      text: 'About',
      route: '/about'
    },
    {
      text: 'Contact',
      route: '/contact'
    }
  ],
  sidebarContent: [
    {
      text: 'Introduction',
      route: '/documentation/introduction',
      subContent: [
        {
          text: 'Motivation',
          route: '/documentation/introduction/motivation'
        },
        {
          text: 'Installation',
          route: '/documentation/introduction/installation'
        },
        {
          text: 'Main Concepts',
          route: '/documentation/introduction/main-concepts'
        }
      ]
    },
    {
      text: 'Basic Tutorial',
      route: 'documentation/introduction',
      subContent: ['Implementation']
    }
  ],
  searchText: ''
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
};
