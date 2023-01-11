import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Pages/Shared/Footer/Footer';
import Leftside from '../Pages/Shared/Leftside/Leftside';
import Rightside from '../Pages/Shared/Rightside/Rightside';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2"  className='d-none d-lg-block'>
                        <Leftside></Leftside>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>

                    </Col>
                    <Col lg="3">
                        <Rightside></Rightside>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;