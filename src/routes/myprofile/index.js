import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { Row, Card, CardBody, CardTitle, Button, Input, Form, Label, Jumbotron } from "reactstrap";

import { Colxx, Separator } from "Components/CustomBootstrap";
import BreadcrumbContainer from "Components/BreadcrumbContainer";

import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";

import {
  widgetType,
  layoutType,
  hoverEffectType,
  usePopupType,
  socialSharingType,
  widgetCode
} from '../../constants/defaultValues';

const selectData = [
  { label: "Chocolate", value: "chocolate", key: 0 },
  { label: "Vanilla", value: "vanilla", key: 1 },
  { label: "Strawberry", value: "strawberry", key: 2 },
  { label: "Caramel", value: "caramel", key: 3 },
  { label: "Cookies and Cream", value: "cookiescream", key: 4 },
  { label: "Peppermint", value: "peppermint", key: 5 }
];

export default class extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOptionLabelOver: ""
    };
  }

  handleChangeLabelOver = selectedOptionLabelOver => {
    this.setState({ selectedOptionLabelOver });
  };

  render() {
    return (
      <Fragment>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="menu.myprofile" />
                </CardTitle>

                <Form>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.name" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.email" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.phone" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.billing1" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.billing2" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.city" />
                  </Label>
                  <div className="form-group has-float-label">
                    <Select
                      components={{ Input: CustomSelectInput }}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      value={this.state.selectedOptionLabelOver}
                      onChange={this.handleChangeLabelOver}
                      options={selectData}
                    />
                    <IntlMessages id="myprofile.country" />
                  </div>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.state" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.instaprofilename" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="text" />
                    <IntlMessages id="myprofile.amusinglyurl" />
                  </Label>
                  <Button color="primary">
                    <IntlMessages id="forms.submit" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="myprofile.changepassword" />
                </CardTitle>
                <Form>
                  <Label className="form-group has-float-label">
                    <Input type="password" />
                    <IntlMessages id="myprofile.currentpassword" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="password" />
                    <IntlMessages id="myprofile.newpassword" />
                  </Label>
                  <Label className="form-group has-float-label">
                    <Input type="password" />
                    <IntlMessages id="myprofile.confirmpassword" />
                  </Label>
                  <Button color="primary">
                    <IntlMessages id="forms.submit" />
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        {
          /*Enjoy!*/
        }
      </Fragment>
    );
  }
}
