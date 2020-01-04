//jshint esversion:6

import React from 'react';

// const FunctionalComponentDemo = function () {
//     return (
//         <div className="main">
//             <div className="mainDiv">
//                 <div>
//                     Hello React
//                 </div>
//                 <div>
//                     How are you today?
//                 </div>
//             </div>
//         </div>
//     );
// };


// replace above with below arrow function
// const FunctionalComponentDemo = () => (
//         <div className="main">
//             <div className="mainDiv">
//                 <div>
//                     Hello React
//                 </div>
//                 <div>
//                     How are you today?
//                 </div>
//             </div>
//         </div>
//     );


// without reactstrap
// const FunctionalComponentDemo = () => (
//     <div className="main">
//         <div className="mainDiv">
            // <h1>Functional Component</h1>
            // <p>Functional components allow you to render information to the web page without having to use or change state.</p>

            // <dl>
            //     <dt>Presentational</dt>
            //     <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>

            //     <dt>No 'this' keyword</dt>
            //     <dd>Unlike class components, functional ones don't use 'this'.</dd>

            //     <dt>No state</dt>
            //     <dd>These are 'dumb' components for UI.</dd>

            //     <dt>return()</dt>
            //     <dd>Must return a single element.</dd>
            // </dl>

            // <h1>Functional Syntax versus Arrow Function</h1>
            // <p>Various sytax of functions.</p>
            
            // <dl>
            //     <dt>Regular JavaScript Function</dt>
            //     <dd></dd>

            //     <dt>Arrow Syntax</dt>
            //     <dd></dd>

            //     <dt>React Component Syntax</dt>
            //     <dd></dd>
            // </dl>
//         </div>
//     </div>
// );


// import react statement is at top
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = function () {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                    <h1>Functional Component</h1>
                    <p>Functional components allow you to render information to the web page without having to use or change state.</p>

                    <dl>
                        <dt>Presentational</dt>
                        <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>

                        <dt>No 'this' keyword</dt>
                        <dd>Unlike class components, functional ones don't use 'this'.</dd>

                        <dt>No state</dt>
                        <dd>These are 'dumb' components for UI.</dd>

                        <dt>return()</dt>
                        <dd>Must return a single element.</dd>
                    </dl>
                </Col>
            </Row>
            <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md="6">
                    <HelloWorldFatArrow className="logo" />
                </Col>
                <Col md="6">
                    <HellowWorld />
                </Col>
            </Row>
        </Container>
    )
};

export default FunctionalComponentDemo;

const HellowWorld = function () {
    return (
        <div>
            <Card>
                <img width="100%" height="240px" src="" alt="Card cap" />
                    <CardBody>
                        <CardTitle>Regular Ole Function</CardTitle>
                        <CardSubtitle>A JS Library</CardSubtitle>
                        <CardText><pre>const HelloWorld = function () </pre>.</CardText>
                        <Button>Go somewhere, yo</Button>
                    </CardBody>
            </Card>
        </div>
    )
};

// Fat Arrow Functional Component - 3 fewer lines. Common in React...
const HelloWorldFatArrow = () => 
    <div>
        <Card>
            <img width="100%" height="240px" src="" alt="Card cap" />
            <CardBody>
                <CardTitle>Fat Arrow</CardTitle>
                <CardSubtitle>A JS Library</CardSubtitle>
                <CardText><pre>const HelloWorld = () => </pre>.</CardText>
                <Button>Go somewhere man</Button>
            </CardBody>
        </Card>
    </div>
