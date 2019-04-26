import HttpRequest from '@/axios/api.request'

export const branchQryAction = () => {
  return HttpRequest.request({
    url: 'branch/',
    method: 'get'
  })
}

export const branchAddAction = (parameter) => {
  return HttpRequest.request({
    url: 'branch/',
    method: 'post',
    data: parameter
  })
}


