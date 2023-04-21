import { IframePage } from '../page';

const iframePage = new IframePage();

describe('Testing iFrame', () => {
  it('then the iframe is loaded', () => {
    iframePage.visit();

    iframePage.assertFrameTitle('HTML Tutorial');
    iframePage.goToCssPageInFrame();

    iframePage.assertFrameTitle('CSS Tutorial');
  });
});
