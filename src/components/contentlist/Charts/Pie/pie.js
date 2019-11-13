import React, { Component } from 'react';
import MyTemplete  from '../../../templete';
import {RadialChart} from 'react-vis';
import CodeBlock from '../../../';
import ReactMarkdown from 'react-markdown';
class MyPie extends Component
{

  renderPie()
  {
    const myData = [
    {angle: 1, label: '1'},
    {angle: 2, label: '2'},
    {angle: 3, label: '3'},
    {angle: 4, label: '4'},
    {angle: 5, label: '5'},
    {angle: 6, label: '6'}
  ]
    return (
      <div className = "pie-display">
        <RadialChart data={myData} width={500} height={600} showLabels/>
      </div>
    );
  }
  render()
  {
    let output = this.renderPie();
    let myName = "Pie";
    let string = `
    import {RadialChart} from 'react-vis';

    const myData = [
    {angle: 1, label: 'Type 1'},
    {angle: 2, label: 'Type 2'},
    {angle: 3, label: 'Type 3'},
    {angle: 4, label: 'Type 4'},
    {angle: 5, label: 'Type 5'},
    {angle: 6, label: 'Type 6'}
    ]
    return (
      <div>
        <RadialChart data={myData} width={500} height={600} showLabels/>
      </div>
    );  `;
    let code = (<ReactMarkdown source={string} renderers={{ code: CodeBlock }}/>);
    return(
      <div>
      <MyTemplete content = {output} name = {myName} sampleUsage={code}/>
      </div>
    );
  }
}

export default MyPie;
