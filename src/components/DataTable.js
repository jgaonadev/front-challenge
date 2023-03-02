import React from 'react';
import Table from 'react-bootstrap/Table';

const DataTable = ({ data }) => {
    const transformedData = data.map((file, index) => ({
        name: file.file,
        lines: file.lines.map((line, lineIndex) => ({
          text: line.text,
          number: line.number ? parseInt(line.number) : 'N/A',
          hex: line.hex,
          lineNumber: lineIndex + 1,
        })),
      }));
    
      let lineNumber = 1;

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>File name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {transformedData.map((file, index) => (
          file.lines.map((line, lineIndex) => (
            <tr key={`${file.name}-${lineIndex}`}>
              <td >{lineNumber++}</td>
              <td >{file.name}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
