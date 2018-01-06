var list;
var Note = React.createClass({
  render() {
    return (
          <div className ='div-note'>
            {this.props.children}
          </div>
        )
  }
});
function add() {
  ReactDOM.render(<Input/>, document.getElementById('div-add') );
}
var List = React.createClass({
  getInitialState() {
    list =this;
    return {array: ['javascript', 'html', 'css']}
  },
  render() {
    return (
      <div className='div-list'>
        <div id='div-add'></div>
        <button onClick={add}>Add</button>
        {this.state.array.map((note, index) => {
          return <Note key={index}>{note}</Note>
        })}
      </div>
    );
  }
});

var Input = React.createClass({
  enter() {
    list.setState({array: list.state.array.concat(this.refs.txt.value)});
  },
  render() {
    return (
      <div>
        <input type='text' ref='txt' placeholder='Enter your note'/>
        <button onClick={this.enter}>Enter</button>
      </div>
    )
  }
});
ReactDOM.render(
  <div>
    <List />
  </div>
  ,
   document.getElementById('root'));
