import { createRenderer } from 'react-addons-test-utils';

export const renderShallow = component => {
  const renderer = createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
};
