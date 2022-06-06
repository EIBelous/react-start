function Button(props) {
	
    const handleClick=()=>(props.clicker(props.increment))
       return (<button onClick={handleClick}>
       +{props.increment}
     </button>)
   }
   
   function Display(props){
     return(
     <div>{props.message}</div>);
   }
   
   function App(){
     const [counter, setCounter] = useState(22);
     const handleClick=(incrementValue)=>setCounter(counter+incrementValue)
     return(
         <div>
     <Button clicker={handleClick} increment={1}/>
         <Button clicker={handleClick} increment={2}/>
         <Button clicker={handleClick} increment={5}/>
         <Button clicker={handleClick} increment={10}/>
         <Display message={counter} />
         </div>)
   }
   ReactDOM.render(
     <App />, 
     document.getElementById('mountNode'),
   );