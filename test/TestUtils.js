import { createRenderer } from 'react-addons-test-utils';

global.renderShallow = component => {
  const renderer = createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
};
