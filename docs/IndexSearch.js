
import React, {PropTypes} from 'react';
import IndexSearch from 'zfUI/indexSearch';
import 'zfUI/indexSearch/style';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  searchBtnSubmit(param){
      console.log(param);
  }
  render() {
    const selectOptions=["全部","医疗器械","手术器械"];
    return (
        <IndexSearch
            selectOptions={selectOptions}
            selectDefault={selectOptions[0]}
            searchBtnSubmit={this.searchBtnSubmit}
        />
    );
  }
}

App.propTypes = {
};
