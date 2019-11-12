import axios from 'axios';
import { Message,Loading } from 'element-ui';

let loading;
function startLoading() {    //使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    //使用Element loading-close 方法
    loading.close()
}
//请求拦截
axios.interceptors.request.use(
    (config) => {
        startLoading();
        return config;
    },
    (error) => {
        return Promise.reject(error);
    });

//响应拦截
axios.interceptors.response.use(
    (response) =>{
        endLoading();
        return response;
    },
    (error) =>{
        endLoading();
        Message.error(error.response.data);
        return Promise.reject(error);
    });


export default axios;
