import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataTable from './DataTable';
import Navbar from './Navbar';

const Layout = ({ data }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable data={data} />
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
