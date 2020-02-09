export const pageLocation = link => {
  console.log('Got in this');
  switch (link) {
    case 'Jobs':
      return '/pagetwo';
    default:
      return;
  }
};

//In case you forget how-to. This is an example of the 'useSelector' hook

// const isOn = (state: IAppState) => state.homeHub.createIsOpen;
// const activeItem = useSelector(isOn);
