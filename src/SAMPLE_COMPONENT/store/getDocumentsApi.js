export const exObject = [
  {id: 1, name: 'Document A', link: '/api/static/doca.pdf', status: 1, statusDateTime: '20201203ZT18140100'},
  {id: 2, name: 'Document B', link: '/api/static/docc.pdf', status: 0, statusDateTime: null},
  {id: 3, name: 'Document C', link: null, status: 0},
  {id: 4, name: 'Document D', link: '/api/static/docd.pdf', status: 1, statusDateTime: '20201203ZT18140100'},
]

export default function getDocumentsApi() {
  return Promise.resolve(exObject)
}
