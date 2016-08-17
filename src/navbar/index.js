import React, {PropTypes} from 'react';
import {Link} from 'react-router';
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {list,left,right} = this.props;
    return (
        <div className="ro-navbar">
            <div className="ro-navbar-wraper">
                {
                    left?<div className="ro-navbar-left">{left}</div>:null
                }
                <ul className="ro-navbar-content">
                    {
                        list.map((item)=>
                        //判断是否为外链
                            item.islink ?
                                <li key={item.route} className="ro-navbar-item">
                                    <a className="ro-navbar-link" href={item.route}>{item.title}</a>
                                </li>
                                :
                                <li key={item.route} className="ro-navbar-item">
                                    <Link className="ro-navbar-link" to={item.route}>{item.title}</Link>
                                </li>
                        )
                    }
                </ul>
                {
                    right ? <div className="ro-navbar-right">{right}</div>:null
                }
            </div>
        </div>
    );
  }
}
Navbar.defaultProps = {
    list:[],
    left:null,
    right:null
}
Navbar.propTypes = {
    list:React.PropTypes.array,
    left:React.PropTypes.node,
    right:React.PropTypes.node
};
