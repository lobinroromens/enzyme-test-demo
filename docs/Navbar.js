
import React, {PropTypes} from 'react';
import Navbar from 'zfUI/navbar';
export default class Navbardemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const list=[
              {title:'进口设备',route:'dfsa'},
              {title:'手术器械',route:'hfs'},
              {title:'医疗辅助',route:'er'},
              {title:'独家代理',route:'teg'},
              {title:'新品上市',route:'ddfds'},
              {title:'促销专区',route:'trhrt'},
              {title:'关于我们',route:'http://baidu.com',islink:true}
          ];
    const left=<a className="all-goods" href="##">全部商品</a>;
    const right=<a className="all-goods" href="##">个人中心</a>;
    return (
        <ul className="content">
            <li><Navbar list={list}/></li>
            <li><Navbar list={list} left={left}/></li>
            <li><Navbar list={list} left={left} right={right}/></li>
        </ul>
    );
  }
}
