export const HANDLE_CHANGE = 'HANDLE_CHANGE';

const initialState = {
  navLinks: [
    {
      id: 1,
      text: 'Docs',
      route: '/documentation',
    },
    {
      id: 2,
      text: 'About',
      route: '/about',
    },
    {
      id: 3,
      text: 'Contact',
      route: '/contact',
    },
  ],
  sidebarContent: [
    {
      id: 1,
      text: 'Introduction',
      route: '/documentation/introduction',
    },
  ],
  searchText: '',
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};
