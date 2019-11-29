import React, { Component, Fragment } from "react";
import {
  Row, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardImg, CardImgOverlay, CardText, Badge, Button, TabContent, TabPane, Nav, NavItem, NavLink as NavLinkRs, FormGroup,
  CustomInput
} from "reactstrap";
import { NavLink } from "react-router-dom";
import classnames from 'classnames';

import { Colxx } from "Components/CustomBootstrap";

export default class CardsUi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFirstTab: '1'
    };
  }

  toggleFirstTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeFirstTab: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" >
            <Row>
              <Colxx xxs="12">
                <Card className="mb-4">
                  <CardHeader>
                    <Nav tabs className="card-header-tabs ">
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeFirstTab === '1', "nav-link": true })}
                          onClick={() => { this.toggleFirstTab('1'); }} to="#"
                        >1</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeFirstTab === '2', "nav-link": true })}
                          onClick={() => { this.toggleFirstTab('2'); }} to="#"
                        >2</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeFirstTab === '3', "nav-link": true })}
                          onClick={() => { this.toggleFirstTab('3'); }} to="#"
                        >3</NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>

                  <TabContent activeTab={this.state.activeFirstTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">Homemade Cheesecake with Fresh Berries and Mint</CardTitle>
                            <Button outline size="sm" color="primary">Edit</Button>
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">Wedding Cake with Flowers Macarons and Blueberries</CardTitle>
                            <Button outline size="sm" color="primary">Edit</Button>
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">Cheesecake with Chocolate Cookies and Cream Biscuits</CardTitle>
                            <Button outline size="sm" color="primary">Edit</Button>
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                  </TabContent>
                </Card>
              </Colxx>
                  {/* <Colxx xxs="6">
                    <Card className="mb-4">
                      <CardBody>
                        dd
                      </CardBody>
                    </Card>
                  </Colxx> */}
            </Row>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
