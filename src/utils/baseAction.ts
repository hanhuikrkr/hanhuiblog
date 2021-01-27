import request   from './request'
import { param } from './params'
import { Component } from 'react'
import { RequestOptionsWithResponse } from 'umi-request'
import { toJS } from 'mobx'

export default class BaseActions extends Component {
  

  get = async (api: string | string[] , params: RequestOptionsWithResponse) => {
    let url
    if (api.indexOf('?') === -1) {
      url = api + `?${param(params)}`
    } else {
      url = api + `&${param(params)}`
    }
    let data = await request(url, params  )
    return toJS(data)
  }

  post = async (api: string, params: any) => {
    return await request(
      api,
      {
        method: 'POST',
        data:params
      },

    )
  }

}
