"use strict";
const react_1 = require('react');
const React = require('react');
const classnames_1 = require('classnames');
const object_assign_1 = require('object-assign');
const splitObject_1 = require('../_util/splitObject');
const objectOrNumber = react_1.PropTypes.oneOfType([react_1.PropTypes.object, react_1.PropTypes.number]);
const stringOrNumber = react_1.PropTypes.oneOfType([react_1.PropTypes.string, react_1.PropTypes.number]);
function Col(props) {
    const [{ span, order, offset, push, pull, className, children }, others] = splitObject_1.default(props, ['span', 'order', 'offset', 'push', 'pull', 'className', 'children']);
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg'].forEach(size => {
        let sizeProps = {};
        if (typeof props[size] === 'number') {
            sizeProps.span = props[size];
        }
        else if (typeof props[size] === 'object') {
            sizeProps = props[size] || {};
        }
        delete others[size];
        sizeClassObj = object_assign_1.default({}, sizeClassObj, {
            [`ant-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`ant-col-${size}-order-${sizeProps.order}`]: sizeProps.order,
            [`ant-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
            [`ant-col-${size}-push-${sizeProps.push}`]: sizeProps.push,
            [`ant-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull,
        });
    });
    const classes = classnames_1.default(object_assign_1.default({}, {
        [`ant-col-${span}`]: span !== undefined,
        [`ant-col-order-${order}`]: order,
        [`ant-col-offset-${offset}`]: offset,
        [`ant-col-push-${push}`]: push,
        [`ant-col-pull-${pull}`]: pull,
        [className]: !!className,
    }, sizeClassObj));
    return <div {...others} className={classes}>{children}</div>;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Col;
Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: react_1.PropTypes.string,
    children: react_1.PropTypes.node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
};
