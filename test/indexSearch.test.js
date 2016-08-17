import React from 'react';
import {expect} from 'chai';
import {shallow,mount,render} from 'enzyme';
import IndexSearch from '../src/indexSearch/index';
describe("电商常用搜索框组件测试",function(){
    let wraper = mount(<IndexSearch />);
    it("组件渲染测试",function(){
        wraper;
    })
    it("是否渲染了input",function(){
        expect(wraper.find("input")).to.have.length(1)
    })
    it("获取搜索框input值",function(){
        expect(wraper.find("input")).to.have.length(1)
        console.log(wraper.props);
    })
    it("点击搜索",function(){
        wraper.find('Button').simulate('click')
    })
    it("回车搜索",function(){
        wraper.find('Button').simulate('click')
    })
})
