import React from 'react';
import {expect} from 'chai';
import {shallow,mount,render} from 'enzyme';
import Navbar from '../src/navbar/index';

//组件渲染测试
describe("navbar",function(){
    let wraper = mount(<Navbar />);
    const list = [
            {title:'进口设备',route:'jksb'},
            {title:'手术器械',route:'sjhjx'},
            {title:'医疗辅助',route:'er'},
            {title:'独家代理',route:'teg'},
            {title:'新品上市',route:'ddfds'},
            {title:'促销专区',route:'trhrt'}
        ];
    const left = <a href="#">my</a>;
    const right = <a href="#">my</a>;
    it("不传参数测试",function(){

        expect(wraper);

    })
    it("传入list参数测试",function(){

        wraper.setProps({list:list});
        expect(wraper);

    })
    it("传入left参数测试",function(){

        wraper.setProps({left:left});
        expect(wraper);

    })
});
