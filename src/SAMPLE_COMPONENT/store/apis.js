export const exObject = [
  {id: 1, name: 'Document A', link: '/api/static/doca.pdf', status: 1, statusDateTime: '20201203ZT18140100'},
  {id: 2, name: 'Document B', link: '/api/static/docc.pdf', status: 0, statusDateTime: null},
  {id: 3, name: 'Document C', link: null, status: 0},
  {id: 4, name: 'Document D', link: '/api/static/docd.pdf', status: 1, statusDateTime: '20201203ZT18140100'},
]

export function getDocumentsApi() {
  return Promise.resolve(exObject)
}

export function uploadFileApi(file) {
  console.log({file});
  if(!file) {
    return;
  }
  const formData = new FormData();
  // Update the formData object
  formData.append(
    "file",
    file,
    file.name
  );
  // send file to server
  const dummyPath = `http://cdn.media/${file.name}`;
  return Promise.resolve(dummyPath)
}

export async function createDocumentApi(payload) {
  const pdfLink = await uploadFileApi(payload.file);
  const rs = {...payload, link: pdfLink};
  // send create document to server
  return Promise.resolve(rs)
}

export async function updateDocumentApi(payload) {
  const pdfLink = await uploadFileApi(payload.file);
  const rs = {...payload, link: pdfLink};
  // send update document request to server
  return Promise.resolve(rs)
}
