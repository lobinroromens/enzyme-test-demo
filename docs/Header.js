import React, {PropTypes} from 'react';
import Navbar from 'zfUI/navbar';
import 'zfUI/navbar/style/index.less';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = [
            {title:"导航栏",route:"navbar"},
            {title:"主页搜索",route:"indexSearch"}
        ];
    return (
        <Navbar list={list} />
    );
  }
}
