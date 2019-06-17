import axios from 'axios'
import QS from 'qs';
import store from'~/store/index'





if (process.env.NODE_ENV == 'development') { //开发
 axios.defaults.baseURL = 'http://localhost:3000';
} else if (process.env.NODE_ENV == 'debug') { //目前测试没有设置
 axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') { //生产
 axios.defaults.baseURL = '';
}

axios.defaults.timeout = 20000; //设置请求超时

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//请求头



//请求拦截

axios.interceptors.request.use(
    config => {
        /*if (sessionStorage.getItem("Token")) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `token ${store.state.token}`;
        }*/
        return config;
    },
    err => {
        return Promise.reject(err);
    });






//响应拦截

axios.interceptors.response.use(
    response => {
//response.status===401是我和后台约定的权限丢失或者权限不够返回的状态码，这个可以自己和后台约定，约定返回某个自定义字段也是可以的
		console.log(response.status)
		if(response.status ==200){
			return response;
		}
		
		
		
    },
    error => {
        return error
    });



/**
  * get方法，对应get请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function get(url, params){
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        })
        .then(res => {
			
			resolve(res);
			
        })
        .catch(err => {
            reject(err)
			
        })
    });
	
}
/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function post(url, params) {
    return new Promise((resolve, reject) => {
		console.log(QS.stringify(params))
        axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res);
			this.$message('封装post执行成功');//显示提示弹框
        })
        .catch(err => {
            reject(err)
        })
    });
}
