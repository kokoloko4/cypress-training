import { UploadPage } from '../page';

const uploadPage = new UploadPage();

describe('Upload and Download file', () => {
  beforeEach(() => {
    uploadPage.visitUploadPage();
  });

  it('upload an HTML file', () => {
    uploadPage.uploadHTML5File('Unknown.png');

    uploadPage.assertTitleHTML5File('Unknown');
  });

  it('upload an DnD file', () => {
    uploadPage.uploadFileDnD('Unknown.png');

    uploadPage.assertTitleFileDnD('Unknown');
  });
});
