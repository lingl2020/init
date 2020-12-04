export default function (apiUrl, params){
  /** 如果参数不是字符串则转换为query-string  */
  let _params = typeof params === 'string' ? params : JSON.stringify(params)
  /** 创建Image对象来发送请求  */
  let img = new Image(1, 1)
  let src = `${apiUrl}?${_params}`
  img.src = src
  /** 其实并不需要将此图片append到body中，请求此时已经发送，目的已经达成了  */
  /** 利用load和error事件来监听动作的完成，返回Promise便于操作  */
  return new Promise((resolve, reject) => {
    img.onload = function () {
      resolve({ code: 200, data: 'success!' })
      console.log(1)
    }
    img.onerror = function (e) {
      reject(new Error(e.error))
      console.log(2)
    }
  })
}
