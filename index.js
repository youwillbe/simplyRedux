import { connect } from 'react-redux'
import React from 'react'
import { change } from './action'

//下面是我们的顶层组件
var Index = React.createClass({
    render() {
        let dispatch = this.props.dispatch
//组件connect之后，会有一个dispatch属性
        return  <div>
                    <button onClick={() => dispatch(change())}>click me</button>
{/*这里我们先把onclick事件做了具象化，就是调用action creator来创建一个action
然后通过dispatch来根据action调用reducer*/}
                    {this.props.show && <div className="block"></div>}
                </div>
    }
})

function select(state) {
    return {show : state}
}
//这是个select函数，作用是把store里的state连接（映射，或者分发）到组件内部的props
//state通常是个复杂的数据结构，但我们这里只是个布尔值，所以只是简单的把state给了show这个props
export default connect(select)(Index)
//connect把我们的react组件和redux连接起来，连接之后，会自动有一个dispatch的props
//当然还会有我们在select函数里写的映射（映射为个人见解，不喜勿喷）