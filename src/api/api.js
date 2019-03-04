import axios from 'axios'

// 首页信息
export function getHomeInfo(){
    return _request('https://www.easy-mock.com/mock/5b5abb8843d7ea2bc7872b4e/data/getGoodList', 'get')
}

// 注册
export function registry (data) {
    return _request('http://localhost:3000/user/registry', 'post', data)
}

function _request (url, methods, data = undefined, params = {}){
    return new Promise((resolve)=>{
        axios({
            method: methods,
            url: url,
            params: Object.assign(params),
            data: data
          }).then(res=>{
              resolve(res)
          })      
    })
}