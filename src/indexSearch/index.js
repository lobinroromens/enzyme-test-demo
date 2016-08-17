import React, {PropTypes} from 'react';
import { Select,Input,Button,Form} from '../common';
const Option = Select.Option;
class IndexSearch extends React.Component {
  constructor(props) {
    super(props);
    const { getFieldProps,getFieldValue } = this.props.form;
    const selectValue = getFieldValue("selectValue");
    const searchValue = getFieldValue("searchValue");
    this.searchBtnSubmit = this.searchBtnSubmit.bind(this,{selectValue:selectValue,searchValue:searchValue});
  };
  searchBtnSubmit(){
    return this.props.searchBtnSubmit;
  };
  render() {
    const {
            selectOptions,
            selectDefault,
            searchDefault,
            searchPlaceholder,
            searchBtnText,
            searchBtnSubmit,
        } = this.props;
    const { getFieldProps,getFieldValue } = this.props.form;
    return (
          <div>
            <div className="index-search">
                <Form inline onSubmit={this.searchBtnSubmit}>
                  <Select
                     defaultValue={selectDefault}
                     className="index-search-before"
                     {...getFieldProps('selectValue')}
                  >
                     {
                      selectOptions.map((item,index)=>{<Option value={item} key={index}>{item}</Option>})
                     }
                  </Select>
                  <Input
                     className="index-search-input"
                     size="large"
                     placeholder={searchPlaceholder}
                     defaultValue={searchDefault}
                     onPressEnter={this.searchBtnSubmit}
                     {...getFieldProps('searchValue')}
                    />
                  <Button type="primary" className="index-search-btn" onClick={this.searchBtnSubmit}>{searchBtnText}</Button>
               </Form>
            </div>
          </div>
    );
  }
};
IndexSearch.defaultProps = {
    selectOptions:[],
    selectDefault:"",
    searchDefault:"",
    searchPlaceholder:"请输入关键信息",
    searchBtnText:"搜索",
    searchBtnSubmit:null
};
IndexSearch.propTypes = {
    selectOptions:React.PropTypes.array,
    selectDefault:React.PropTypes.string,
    searchDefault:React.PropTypes.string,
    searchPlaceholder:React.PropTypes.string,
    searchBtnText:React.PropTypes.string,
    searchBtnSubmit:React.PropTypes.func
};
IndexSearch = Form.create()(IndexSearch);
export default IndexSearch;
