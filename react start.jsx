class Card extends React.Component{
  render(){
    return (
    <div className="github-profile">
     <img src="https://plasehold.it/75"/>
       <div className="info">
          <div className="name"> name here </div>
          <div className="company"> company here </div>
        </div>
    </div>
    );
  }
}
class App extends React.Component{
  render(){
  return ( <div className="header">{this.props.title}
     <Card />
    </div>
   );
  }
}



ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);