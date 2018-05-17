/*
 ajax 请求*/

import axios from 'axios'

export default function ajax (url='',data={},type='GET') {
  return new Promise(function (resolve, reject) {
    let Promise
    if(type === 'GET'){
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' +data [key] + '&'
      })
      if(dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' +dataStr
      }

      //发送get 请求
      promise = ajax.get(url)
    }else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
