import React from 'react';

class App extends React.Component {
  state = {
    total: false,
    scientific: false,
    selected: '0',
    error: '' ,
    cardStyle: 'grey lighten-2 ',
    headerStyle: 'black-text',
    resultStyle: 'black-text',
    resultHeader: 'col s12 right-align grey lighten-2',
    calculatorButtonStyle1: 'col s6 waves-effect waves btn black-text grey lighten-2',
    calculatorButtonStyle2: 'col s3 waves-effect waves btn black-text grey lighten-2',
    calculatorButtonStyle3: 'col s4 waves-effect waves btn black-text grey lighten-2',
    calculatorButtonStyle4: 'col s12 waves-effect waves btn black-text grey lighten-2'
  }
  addNumber = (data) => {
    if (this.state.total) {
      this.setState({selected: data.toString() , total: false});
      return;
    }
    if (this.state.selected === '0') {
      this.setState({ selected: data.toString()});
    } else { 
      const selected = this.state.selected + (data).toString();
      this.setState({ selected });
    } 
  }
  addOperator = ( data) => {
    if(data === '+') {
      if(this.state.selected !== '0' && parseInt(this.state.selected.charAt(this.state.selected.length-1))) {
          this.setState({ selected: this.state.selected + data });
      }
    } else if(data === '-'){
      if (this.state.selected !== '0' && parseInt(this.state.selected.charAt(this.state.selected.length-1))) {
        this.setState({ selected: this.state.selected + data });
      }
    } else if (data === '*') {
      if (this.state.selected !== '0' && parseInt(this.state.selected.charAt(this.state.selected.length-1))) {
        this.setState({ selected: this.state.selected + data });
      }
    } else if (data === '/') {
      if (this.state.selected !== '0' && parseInt(this.state.selected.charAt(this.state.selected.length-1))) {
          this.setState({ selected: this.state.selected + data });
      }
    }
  }
  calculateValue = () => {
    if (this.state.selected!=='0') {
      if (parseInt(this.state.selected.charAt(this.state.selected.length-1)) || parseInt(this.state.selected.charAt(this.state.selected.length-1)) === 0) {
        if (this.state.selected.includes('/0')) {
          console.log('Math err');
          this.setState({ error: 'Math error :  Divide by 0', total: true  });    
          return;
        }
        try {
          const total = eval(this.state.selected);
          this.setState({ selected: total.toString(), error: '', total: true }) 
        } catch (e) {
          this.setState({ error: e.toString() , total: true });
          console.log(e.toString());
          return;
        }
      }
    }
  }
  scientificCalculation = (operation) => {
    if (parseInt(this.state.selected.charAt(this.state.selected.length-1))) {
      if (operation === '+/-') {
          if (parseInt(this.state.selected.charAt(0))) {
            this.setState({ selected: '-' + this.state.selected, total: true });
          } else {
            this.setState({ selected: this.state.selected.substring(1), total: true});    
          }
      } else if (operation === 'Square') {
          const result = parseInt(this.state.selected) * parseInt(this.state.selected);
          this.setState({ selected: result.toString(), total: true});
      } else {
        const result = Math.sqrt(parseInt(this.state.selected));
        if(result) {
          this.setState({ selected: result.toString(), total: true});
        } else {
          this.setState({ error: ' Imaginary Number ', total: true});
        }
      }
    }
  }
  changeTheme = (theme) => {
    let body = document.getElementById('body');
    if(theme === 'light') {
        body.style.background = '#ffffff';
        this.setState({
            headerStyle: 'black-text',
            resultStyle: 'black-text',
            cardStyle: 'grey lighten-2 ',
            resultHeader: 'col s12 right-align grey lighten-2',
            calculatorButtonStyle1: 'col s6 waves-effect waves btn black-text grey lighten-2' ,
            calculatorButtonStyle2: 'col s3 waves-effect waves btn black-text grey lighten-2',
            calculatorButtonStyle3: 'col s4 waves-effect waves btn black-text grey lighten-2',
            calculatorButtonStyle4: 'col s12 waves-effect waves btn black-text grey lighten-2'
        });
    } else {
      body.style.background = '#000000';
      this.setState({
        headerStyle: 'white-text',
        resultStyle: 'white-text',
        cardStyle: 'grey darken-2 ',
        resultHeader: 'col s12 right-align grey darken-2',
        calculatorButtonStyle1: ' col s6 waves-effect waves btn white-text grey darken-2',
        calculatorButtonStyle2: 'col s3 waves-effect waves btn white-text grey darken-2',
        calculatorButtonStyle3: 'col s4 waves-effect waves btn white-text grey darken-2',
        calculatorButtonStyle4: 'col s12 waves-effect waves btn white-text grey darken-2'
      });
    }
  }
  render() {
    return (
      <div className = 'container'>
      <div className = 'row'>
        <div className = 'col s12 center-align'>
          <h1 className = { this.state.headerStyle } > Simple calculator </h1>
        </div>
        {this.state.error && <div className = 'col s12'>
          <p className = 'red-text'> { this.state.error } </p>
        </div>}
        <div className = 'col s12'>
          <div className = { this.state.cardStyle }>
            <div className = 'card-content'>
              <div className = 'row'>
                <button className = { this.state.calculatorButtonStyle1 } onClick = { () => { this.changeTheme('light') } }> Light Theme </button>
                <button className = { this.state.calculatorButtonStyle1 } onClick = { () => { this.changeTheme('Dark') } }> Dark Theme </button>
                <div className = { this.state.resultHeader }>
                    <h2 className = {  this.state.resultStyle }> { this.state.selected } </h2>
                </div>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(1) }}> 1 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(2) }}> 2 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(3) }}> 3 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addOperator('+') }}> Add(+) </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(4) }}> 4 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(5) }}> 5 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(6) }}> 6 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addOperator('-') }}> Subtract(-) </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(7) }}> 7 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(8) }}> 8 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(9) }}> 9 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addOperator('*') }}> Multiply(*) </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.setState({ selected: '0' })  }}> clear </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addNumber(0) }}> 0 </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.calculateValue() }}> = </button>
                <button className = { this.state.calculatorButtonStyle2 } onClick = { () => { this.addOperator('/') }}> Divide(/) </button>
                <button className = { this.state.calculatorButtonStyle4 } onClick = { () => { this.setState({ scientific: !this.state.scientific }) } }>Scientific Mode</button>
                { this.state.scientific && <React.Fragment>
                  <button className = { this.state.calculatorButtonStyle3 } onClick = { () => { this.scientificCalculation('+/-') } }> +/- </button>
                  <button className = { this.state.calculatorButtonStyle3 } onClick = { () => { this.scientificCalculation('Square') } }> Square </button>
                  <button className = { this.state.calculatorButtonStyle3 } onClick = { () => { this.scientificCalculation('Square Root') } }> Square Root </button>
                </React.Fragment> }          
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default App;
