import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './main.css'
import { reducer } from './reducer'
import Index from './index'

let store = createStore(reducer)
//创建唯一的store，参数是我们写好的reducer

render(<Provider store={store}><Index/></Provider>, document.getElementById('app'))
//渲染我们的顶层组件，但是要用Provider包裹起来，并传入store