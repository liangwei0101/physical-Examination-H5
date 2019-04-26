import HttpRequest from '@/axios/api.request'

export const UserQryAction = () => {
  return HttpRequest.request({
    url: 'branch/',
    method: 'get'
  })
}

export const UserAddAction = (parameter) => {
  return HttpRequest.request({
    url: 'branch/',
    method: 'post',
    data: parameter
  })
}


