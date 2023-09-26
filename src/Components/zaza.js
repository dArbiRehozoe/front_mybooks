import React from "react";
export default class Books extends React.Component {
    render() {
      return <div>
        <h2>Book list</h2>
        <p>Avalaible books:</p>
        <table style={table}>
        <tr>
            <th style={th}></th>
            <th style={th}>author</th>
            <th style={th}>id</th>
            <th style={th}>isbn</th>
            <th style={th}>title</th>
        </tr>
        <tr>
            <td style={ligne}>0</td>
            <td style={ligne}>Griffin</td>
            <td style={ligne}>$100</td>
            <td style={ligne}>$100</td>
            <td style={ligne}>$100</td>
        </tr>
      
      </table>
      </div>;
    }
  }
  const ligne ={
    border: "1px solid black"
  }
  const th ={
    border: "1px solid black"
  }
  const table={
    borderCollapse: 'collapse',
    border: "1px solid black",
    width: '100%'
  }