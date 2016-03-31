export function change() {
  return { type: 'CHANGE' }
}
//一个最简单的action creator，作用是把事件转化成有语义的action
//像这里的，如果一个事件调用了change这个函数，就会返回一个action
//每个action都是一个对象，都有一个type的键
//我们在reducer中根据action的type来执行相应的操作