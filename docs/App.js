
import React, {PropTypes} from 'react';
import IndexSearch from 'zfUI/indexSearch';
import Header from './Header';
import 'zfUI/common/style';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="main">
            <Header />
            <div className="wraper">
                {this.props.children}
            </div>
        </div>
    );
  }
}

App.propTypes = {
};
