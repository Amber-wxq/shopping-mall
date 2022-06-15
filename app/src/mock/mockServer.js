//引入模块
import Mock from 'mockjs';

//引入数据
import banner from './banners.json';
import floor from './floors.json';

//mock数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });