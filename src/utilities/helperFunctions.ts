export const pageLocation = (link) => {
  console.log('Got in this');
  switch (link) {
    case 'Jobs':
      return '/pagetwo';
    default:
      return;
  }
};
