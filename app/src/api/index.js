import requests from "./requests";

//三级联动接口
// /api/product/getBaseCategoryList GET 无参数
//往外暴露一个函数  req设置了api前缀 所以url可不加、api
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: "get" });