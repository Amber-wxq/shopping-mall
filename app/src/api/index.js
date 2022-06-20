import requests from "./requests";
import mockRequests from "./mockAjax";
//三级联动接口
// /api/product/getBaseCategoryList GET 无参数
//往外暴露一个函数  req设置了api前缀 所以url可不加、api
// export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: "get" });
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');
export const reqGetBannerList = () => mockRequests.get('/banner');
export const reqGetFloorList = () => mockRequests.get('/floor');
export const reqGetSearchList = (params) => requests({ url: '/list', method: 'post', data: params });