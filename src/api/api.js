import axios from 'axios'

// 首页信息
export function getHomeInfo(){
    return _request('/getGoodList', 'get')
}

function _request (url, methods, data = undefined, params = {}){
    return new Promise((resolve)=>{
        axios({
            baseURL: `https://www.easy-mock.com/mock/5b5abb8843d7ea2bc7872b4e/data`,
            method: methods,
            url: url,
            params: Object.assign(params),
            data: data
          }).then(res=>{
              resolve(res)
          })      
    })
}