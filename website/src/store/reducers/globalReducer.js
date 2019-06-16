const initialState = {
  navLinks: [
    {
      text: 'Docs',
      route: '/documentation',
    },
    {
      text: 'About',
      route: '/about',
    },
    {
      text: 'Contact',
      route: '/contact',
    },
  ],
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
