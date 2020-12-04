export default function (pageType,params){
  if(!pageType) {
    throw new Error('埋点信息有误')
  }

  // 根据 pageType 进行请求

  switch (pageType) {
    case 'btnClick':
      // 具体请求信息以及执行回调
      break;
  
    default:
      break;
  }

  console.log(params)

}