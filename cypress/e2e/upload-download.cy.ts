import { DownloadPage, UploadPage } from '../page';

const uploadPage = new UploadPage();
const downloadPage = new DownloadPage();

describe('Upload file', () => {
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

describe('Download file', () => {
  beforeEach(() => {
    downloadPage.visitDownloadPage();
  });

  it('then the file is downloaded', () => {
    downloadPage.downloadImage();

    downloadPage.assertFileWasDownloaded();
  });
});
