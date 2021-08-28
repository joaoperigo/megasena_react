import React from 'react'
import  ReactDOM  from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            n1: null,
            n2: null,
            n3: null,
            n4: null,
            n5: null,
            n6: null,
        }
    }
    
    checaRepeticao = (numeros) => {
      let checa=0
      let aux = this.getRandomInt(6)
      for(let i=0; i<numeros.length; i++) {
        if( numeros[i]===aux ) {
          ++checa
          break
        }
      }
      if(checa>0) this.checaRepeticao(numeros)
      numeros.push(aux)
    }

    getRandomInt = (max) => { 
      return Math.floor(Math.random() * max + 1);
    }

    obterN = () => { //qdo usuario clica
      let numeros = []
      for( let i=0; i<6; i++) {
        this.checaRepeticao(numeros)
      }
      numeros.sort()
      this.setState({
          n1: numeros[0] + ' - ',
          n2: numeros[1] + ' - ',
          n3: numeros[2] + ' - ',
          n4: numeros[3] + ' - ',
          n5: numeros[4] + ' - ',
          n6: numeros[5]   
        }
      )
    }



    render(){
        // this.obterLocalizacao()
        return (
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center border rounded mb-2" style={{height: '6rem'}}>
                                    <p className="w-75 ms-3 text-center fs-1">
                                      {this.state.n1}
                                      {this.state.n2}
                                      {this.state.n3}
                                      {this.state.n4}
                                      {this.state.n5}
                                      {this.state.n6}
                                    </p>
                                </div>
                                
                                <button onClick={this.obterN} className="btn btn-outline-primary w-100 mt-2">
                                        Qual a minha estação?
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)