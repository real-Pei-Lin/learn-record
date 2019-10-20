import request from "@/utils/request"
export default {
    // 获取会员列表
    getList() {
        return request({
            url: '/member/list',
            method: 'get'
        })
    },

    // page当前页码, size 每页显示条数, searchMap 条件
    // 后台要通过 page 和 size 统计本次请求响应的数据
    search(page, size, searchMap) {
        return request({
            url: `/member/list/search/${page}/${size}`,
            method: 'post',
            data: searchMap
        })
    }
}