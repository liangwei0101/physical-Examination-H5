import HttpRequest from '@/axios/api.request'

export const branchQryAction = () => {
  return HttpRequest.request({
    url: 'branch/',
    method: 'get'
  })
}

export const branchByIdQryAction = (parameter) => {
  return HttpRequest.request({
    url: 'branch/' + parameter,
    method: 'get'
  })
}

export const projectQryAction = () => {
  return HttpRequest.request({
    url: '/project',
    method: 'get'
  })
}

export const mealQryAction = () => {
  return HttpRequest.request({
    url: '/meal',
    method: 'get'
  })
}

export const mealProjectByIdQryAction = (mealId) => {
  return HttpRequest.request({
    url: '/mealProject/' + mealId,
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

export const UserAddAction = (parameter) => {
  return HttpRequest.request({
    url: '/user',
    method: 'post',
    data: parameter
  })
}

export const subscribeAddAction = (parameter) => {
  return HttpRequest.request({
    url: '/subscribe',
    method: 'post',
    data: parameter
  })
}

