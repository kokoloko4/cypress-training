import { IframePage } from '../page';

const iframePage = new IframePage();

describe('Testing iFrame', () => {
  beforeEach(() => {
    iframePage.visit();
  });

  it('then the iframe is loaded', () => {
    iframePage.assertFrameTitle('HTML Tutorial');
  });

  it('then css page inside iframe is loaded', () => {
    iframePage.goToCssPageInFrame();

    iframePage.assertFrameTitle('CSS Tutorial');
  });
});
