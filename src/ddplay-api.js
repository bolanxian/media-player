
import { createMD5 } from './hash-stream'
import { gmxhr, fetch, isPlainObject } from './utils'
export { gmxhr, fetch }
//https://api.dandanplay.net/swagger
let apiHost = 'api.dandanplay.net'
export let apiBase = `https://${apiHost}/`
export const setApiBase = _ => { apiBase = _ }
export const hosts = [
  apiHost,
  'cas.dandanplay.net'
]
export const episodeTypes = Object.freeze({
  __proto__: null,
  tvseries: 'TV动画',
  tvspecial: 'TV特别',
  ova: 'OVA',
  movie: '电影',
  musicvideo: 'MV',
  web: 'Web',
  other: '其他',
  jpmovie: '日本电影',
  jpdrama: '日本电视剧',
  unknown: '未知'
})

export const danFetch = async (url, requestData, init = {}) => {
  url = new URL(url, apiBase).href
  if (requestData != null) {
    init.method ??= 'POST'
    if (isPlainObject(requestData)) {
      init.headers = new Headers(init.headers)
      init.headers.set('content-type', 'application/json')
      init.body = JSON.stringify(requestData)
    } else {
      init.body = requestData
    }
  }
  init.credentials ??= 'omit'
  const request = new Request(url, init)
  if (!request.headers.has('accept')) {
    request.headers.set('accept', 'application/json')
  }
  const response = await fetch(request)
  const { status } = response
  if (!(status >= 200 && status < 300)) {
    throw new TypeError(`Request failed with status code ${status}`)
  }
  let data
  const type = response.headers.get('content-type'), typeJson = 'application/json'
  if (type === typeJson || type?.startsWith(typeJson)) {
    data = await response.json()
    if (data.errorMessage) {
      throw new TypeError('DandanPlay API Error: ' + data.errorMessage, { cause: data })
    }
  }
  return { request, response, data }
}
export async function match(name, blob) {
  let size = blob?.size ?? 0, hash = '00000000000000000000000000000000'
  if (blob != null) {
    try {
      const md5 = createMD5()
      const stream = blob.slice(0, 16 * 1024 * 1024).stream()
      await stream.pipeThrough(md5).pipeTo(new WritableStream())
      hash = md5.result
    } catch (e) {
      console.warn('MD5 Error: ', e)
    }
  }
  const resp = await danFetch('api/v2/match', {
    fileName: name, fileHash: hash, fileSize: size,
    //videoDuration:0,
    matchMode: 'hashAndFileName'
  })
  return resp.data
}
export const commentURL = (episodeId, withRelated = true) => {
  return `${apiBase}api/v2/comment/${episodeId}${withRelated ? '?withRelated=true' : ''}`
}
export async function comment(episodeId, withRelated = true) {
  const url = commentURL(episodeId, withRelated)
  const resp = await danFetch(url)
  return resp.data.comments
}
export async function related(episodeId) {
  const url = `${apiBase}api/v2/related/${episodeId}`
  const resp = await danFetch(url)
  return resp.data.relateds
}
