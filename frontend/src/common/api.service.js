import {CSRF_TOKEN} from "@/common/csrf_token";


function handleResponse(res){
    if(res.status ==204){
        return "";
    }else if (res.status ===404){
        console.log("取得失敗")
        return null
    }else {
        return res.json()
    }
}

function apiService(endpoint,method,data){
    const config ={
        method: method ||"GET",
        body: data !==undefined ? JSON.stringify(data) :null,
        headers:{
            "content-type":"application/json",
            "X-CSRFTOKEN": CSRF_TOKEN
        }
    };
    return fetch(endpoint,config).then(handleResponse);
}

export {apiService};

