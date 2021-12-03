import React  from 'react'
import '../styles.scss'

 class Box extends React.Component {
    constructor(){
        super();
        this.state = { color : "rojo"  }
        this.colors = [
            {
                id : 1,
                colorName: 'amarillo'
            },
            {
                id : 2,
                colorName: 'verde'
            },
            {
                id : 3,
                colorName: 'rojo'
            }
        ];
        this.count = 0
        this.colorTemp = "";
        
    }
    updateColor = () =>{
            (this.count === 3) ? this.count = 1 : this.count++;
            this.colorTemp = this.colors[this.count-1].colorName
            
            this.setState({ color: this.colorTemp})  
            // console.log(this.state.color)    

    }
    componentDidMount(){
        
        setInterval(() => {
            this.updateColor();
        }, 2000);
     }
    render() {
      return (
        <div className={"box "  +  this.state.color }> 
           <div className="boxInterno ">
                <div className="buttonDiv">
                    Message to Update
                </div>
           </div>
        </div>
      );
    }
  }
  
  export default Box;
  

   
         

    

