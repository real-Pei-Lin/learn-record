import request from '@/utils/request'

export default {
    getList(){
        return request({
            url:'/supplier/list',
            method:'get'
        })
    }
}