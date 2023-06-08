const mockFiles = import.meta.globEager(['../static/*.png']);

for (const i in mockFiles) {
  let key = i.split('/');
  key = key[key.length - 1].replace('.png', '');
  mockFiles[key] = mockFiles[i].default;
  delete mockFiles[i];
}
mockFiles.admin =
  'https://th.bing.com/th/id/R.cf03864e63bf530d4ec4b15ca708bf02?rik=oBa69x0bKTZQwQ&pid=ImgRaw&r=0';

export default mockFiles;
