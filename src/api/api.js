import http from  "@utils/request.js"
import api from "./index"
// {HotArtIndexApi, CareChooseIndexApi,CareChooseProApi,
export const HomeBannerApi=(data)=>{
    return http.get(api.home.banner,data)
}
//首页活动推荐
export const HomeActivityApi=(data)=>{
    return http.get(api.home.activity,data)
}
export const homeCategoryApi=(data)=>{
    return http.get(api.home.category,data)
}
export const homeMediumListApi=(data)=>{
    return http.get(api.home.mediumList,data)
}

//全部品牌
export const vendorIndexApi=(data)=>{
    return http.get(api.vendor.index,data)
}
//品牌详情
export const vendorDetailApi=(id)=>{
    return http.get(api.vendor.index+id+"/")
}

//发现页 每日精选
export const CareChooseIndexApi=(data)=>{
    return http.get(api.find.careChoose,data)
}
//每日精选横图部分
export const CareChooseProApi=(data)=>{
    return http.get(api.find.careChoosePro,data)
}

export const HotArtIndexApi=(data)=>{
    // return http.get(api.find.careChoosePro,data)
}
//文章详情页 文章内容
export const ArticleMainApi=(id)=>{
    return http.get(api.article.main+id)
}
//文章详情页 相关专题
export const ArticleAboutApi=(query)=>{
    return http.get(api.article.main,query)
}

// 分类
export const getClassifyApi = () => http.get(api.classify.classify, {
    img_size: 'medium',
    order_by: '-priority',
    limit: 100
})
// 商品列表
export const getGoodsListApi = (id) => http.get(api.goodsList.goodsList, {
    img_size: 'small',
    order_by: '-priority',
    items_per_shelf: 10,
    id__in: id,
    limit: 10,
    offset: 0
})

export const getGoodsNavApi = (categoryId) => http.get(api.goodsList.goodsNav + categoryId, {
    img_size: 'medium'
})

// details
export const getDetailsApi = (id) => http.get(api.details.details + id)

// cart

export const getCartApi = () => http.get(api.cart.cart)


// 是否选中
export const selectApi = (data) => http.post(api.cart.select, data)

// 数量变化
export const countApi = (data) => http.put(api.cart.cart, data)

// del
export const delApi = (data) => http.put(api.cart.cart, data)


// collect
export const collectApi = (data) => http.post(api.cart.collection, data)

// addGoods
export const addGoodsApi = (data) => http.post(api.cart.addGoods, data)

// combainGoods
export const combainGoodsApi=(data)=>http.put(api.cart.combainGoods,data)
// search
export const searchApi=()=>http.get(api.search.search)

// 关键字搜索
export const keywordApi=(data)=>http.post(api.search.keyword,data,{"Content-Type":"application/x-www-form-urlencoded"})