export function httpGet(url){
    var result = fetch(url)
    return result
}

export function httpPost(url,data){
    var result = fetch(url,{
        method:'post',
        headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        //format the data to be like "username=tony&pwd=123456"
        body:paramsPostBody(data)
    })
    return result;
}

//format data
function paramsPostBody(obj){
    var result = '';
    var item;
    for(item in obj){
        result += '&'+item+'='+encodeURIComponent(obj[item])
    }
    if(result){
        result = result.slice(1)
    }
    return result
}