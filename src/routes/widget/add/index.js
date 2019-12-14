import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import { widgetAdd, instagramImageList } from "Redux/actions";

import IntlMessages from "Util/IntlMessages";
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardImg,
  Badge,
  Form,
  Label,
  Input,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink as NavLinkRs
} from "reactstrap";

import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";

import { NavLink } from "react-router-dom";
import classnames from "classnames";

import { NotificationManager } from "Components/ReactNotifications";

import { uuid } from "uuidv4";

import { Colxx } from "Components/CustomBootstrap";
import {
  widgetType,
  widgetStyle,
  usePopupType,
  socialSharingType,
  widgetCode,
  hoverEffectType
} from "../../../constants/defaultValues";

import ColorPicker from "rc-color-picker";

import "rc-color-picker/assets/index.css";

class WidgetAddView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFirstTab: "1",
      widget: {
        embed_id: 0,
        widget_name: '',
        customer_id: 0,
        customer_insta_id: 0,
        widget_type: "",
        backcolor: "",
        txtcolor: "",
        popup: "",
        socialsharing: "",
        widget_style: "",
        widget_fullpage: "",
        thumbnail: "",
        layout_row: "",
        layout_column: "",
        hover_effect: "",
        embed_padding: "",
        embed_width: "",
        widget_key: uuid()
      },
      selectedItems: []
    };
  }

  handleSubmitWidget = e => {
    this.props.saveNewWidget(this.state.widget, this.state.selectedItems, this.props.history);
  };

  handleCopyWidgetCode = e => {
    this.widgetTextArea.select();
  };

  toggleFirstTab = tab => {
    this.setState({
      activeFirstTab: tab
    });
  };

  handleChangeWidgetType = w => {
    this.setState({
      widget: {
        ...this.state.widget,
        widget_type: w.value
      }
    });
  };

  handleChangeWidgetStyle = w => {
    this.setState({
      widget: {
        ...this.state.widget,
        widget_style: w.value
      }
    });
  };

  handleChangeHoverEffect = w => {
    this.setState({
      widget: {
        ...this.state.widget,
        hover_effect: w.value
      }
    });
  };

  handleChangePopup = w => {
    this.setState({
      widget: {
        ...this.state.widget,
        popup: w.value
      }
    });
  };

  handleChangeSocial = w => {
    this.setState({
      widget: {
        ...this.state.widget,
        socialsharing: w.value
      }
    });
  };

  handleInput = e => {
    const event = e;
    this.setState({
      widget: {
        ...this.state.widget,
        [event.target.name]: event.target.value
      }
    });
  };

  handleBackground = color => {
    this.setState({
      widget: {
        ...this.state.widget,
        backcolor: color.color
      }
    });
  };

  handletxtcolor = color => {
    this.setState({
      widget: {
        ...this.state.widget,
        txtcolor: color.color
      }
    });
  };

  handleCheckChange(event, id) {
    let selectedItems = this.state.selectedItems;
    if (selectedItems.includes(id)) {
      selectedItems = selectedItems.filter(x => x !== id);
    } else {
      selectedItems.push(id);
    }
    this.setState({
      selectedItems
    });
  }

  componentDidMount() {
    if (this.props.instagramImageList.length === 0) {
      this.props.getInstagramImageList();
    }
  }

  render() {
    const { instagramImageList } = this.props;
    return instagramImageList.length === 0 ? (
      <div className="loading"></div>
    ) : (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Row>
              <Colxx xxs="6">
                <Card className="mb-4">
                  <CardHeader>
                    <Nav tabs className="card-header-tabs ">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeFirstTab === "1",
                            "nav-link": true
                          })}
                          onClick={() => {
                            this.toggleFirstTab("1");
                          }}
                          to="#"
                        >
                          1
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeFirstTab === "2",
                            "nav-link": true
                          })}
                          onClick={() => {
                            this.toggleFirstTab("2");
                          }}
                          to="#"
                        >
                          2
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeFirstTab === "3",
                            "nav-link": true
                          })}
                          onClick={() => {
                            this.toggleFirstTab("3");
                          }}
                          to="#"
                        >
                          3
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </CardHeader>

                  <TabContent activeTab={this.state.activeFirstTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <Form>
                              <Row>
                                <Colxx sm="12">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      type="text"
                                      name="widget_name"
                                      value={this.state.widget.widget_name}
                                      onChange={e => this.handleInput(e)}
                                    />
                                    <IntlMessages id="widget.name" />
                                  </Label>
                                </Colxx>
                              </Row>
                              <Row>
                                <Colxx sm="12">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      type="text"
                                      name="widget_key"
                                      onChange={e => {
                                        return false;
                                      }}
                                      value={this.state.widget.widget_key}
                                    />
                                    <IntlMessages id="widget.key" />
                                  </Label>
                                </Colxx>
                              </Row>
                              <div className="form-group has-float-label">
                                <Select
                                  components={{
                                    Input: CustomSelectInput
                                  }}
                                  className="react-select"
                                  classNamePrefix="react-select"
                                  name="form-field-name"
                                  onChange={this.handleChangeWidgetType}
                                  options={widgetType}
                                />
                                <IntlMessages id="widget.widget-type" />
                              </div>
                              <div className="form-group has-float-label">
                                <Select
                                  components={{
                                    Input: CustomSelectInput
                                  }}
                                  className="react-select"
                                  classNamePrefix="react-select"
                                  name="form-field-name"
                                  onChange={this.handleChangeWidgetStyle}
                                  options={widgetStyle}
                                />
                                <IntlMessages id="widget.style" />
                              </div>
                              <Row>
                                <Colxx sm="6">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      type="text"
                                      name="thumbnail"
                                      value={this.state.widget.thumbnail}
                                      onChange={e => this.handleInput(e)}
                                    />
                                    <IntlMessages id="widget.thumbnail-size" />
                                  </Label>
                                </Colxx>
                                <Colxx sm="3">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      type="text"
                                      name="layout_row"
                                      value={this.state.widget.layout_row}
                                      onChange={e => this.handleInput(e)}
                                    />
                                    <IntlMessages id="widget.layout" />
                                  </Label>
                                </Colxx>
                                <Colxx sm="3">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      type="text"
                                      name="layout_column"
                                      value={this.state.widget.layout_column}
                                      onChange={e => this.handleInput(e)}
                                    />
                                  </Label>
                                </Colxx>
                              </Row>
                              <Row>
                                <Colxx sm="4">
                                  <div className="form-group has-float-label">
                                    <Select
                                      components={{
                                        Input: CustomSelectInput
                                      }}
                                      className="react-select"
                                      classNamePrefix="react-select"
                                      name="form-field-name"
                                      onChange={this.handleChangeHoverEffect}
                                      options={hoverEffectType}
                                    />
                                    <IntlMessages id="widget.hovereffect" />
                                  </div>
                                </Colxx>
                                <Colxx sm="4">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      type="text"
                                      name="embed_padding"
                                      value={this.state.widget.embed_padding}
                                      onChange={e => this.handleInput(e)}
                                    />
                                    <IntlMessages id="widget.padding" />
                                  </Label>
                                </Colxx>
                                <Colxx sm="4">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      type="text"
                                      name="embed_width"
                                      value={this.state.widget.embed_width}
                                      onChange={e => this.handleInput(e)}
                                    />
                                    <IntlMessages id="widget.width" />
                                  </Label>
                                </Colxx>
                              </Row>
                              <Row>
                                <Colxx sm="11">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      onChange={e => {
                                        return false;
                                      }}
                                      type="text"
                                      value={this.state.widget.backcolor}
                                    />
                                    <IntlMessages id="widget.background-color" />
                                  </Label>
                                </Colxx>
                                <Colxx sm="1">
                                  <ColorPicker
                                    color={this.state.backcolor}
                                    alpha={100}
                                    placement="topLeft"
                                    className="color-picker"
                                    onChange={this.handleBackground}
                                    onClose={this.handleBackground}
                                  >
                                    <span className="rc-color-picker-trigger" />
                                  </ColorPicker>
                                </Colxx>
                              </Row>
                              <Row>
                                <Colxx sm="11">
                                  <Label className="form-group has-float-label">
                                    <Input
                                      type="text"
                                      onChange={e => {
                                        return false;
                                      }}
                                      value={this.state.widget.txtcolor}
                                    />
                                    <IntlMessages id="widget.text-color" />
                                  </Label>
                                </Colxx>
                                <Colxx sm="1">
                                  <ColorPicker
                                    color={this.state.txtcolor}
                                    alpha={100}
                                    placement="topLeft"
                                    className="color-picker"
                                    onChange={this.handletxtcolor}
                                    onClose={this.handletxtcolor}
                                  >
                                    <span className="rc-color-picker-trigger" />
                                  </ColorPicker>
                                </Colxx>
                              </Row>
                              <div className="form-group has-float-label">
                                <Select
                                  components={{
                                    Input: CustomSelectInput
                                  }}
                                  className="react-select"
                                  classNamePrefix="react-select"
                                  onChange={this.handleChangePopup}
                                  options={usePopupType}
                                />
                                <IntlMessages id="widget.use-pop-up" />
                              </div>
                              <Button
                                className="btn-half"
                                size="sm"
                                color="primary"
                                onClick={e => this.toggleFirstTab("2", e)}
                              >
                                Next
                              </Button>
                            </Form>
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <div className="form-group has-float-label">
                              <Select
                                components={{
                                  Input: CustomSelectInput
                                }}
                                className="react-select"
                                classNamePrefix="react-select"
                                onChange={this.handleChangeSocial}
                                options={socialSharingType}
                              />
                              <IntlMessages id="widget.social-sharing" />
                            </div>
                            <Button
                              className="btn-half"
                              size="sm"
                              color="primary"
                              onClick={e => this.toggleFirstTab("1", e)}
                            >
                              Prev
                            </Button>{" "}
                            <Button
                              className="btn-half"
                              size="sm"
                              color="primary"
                              onClick={e => this.toggleFirstTab("3", e)}
                            >
                              Next
                            </Button>
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Colxx sm="12">
                          <CardBody>
                            <CardTitle className="mb-4">
                              Activate Amusingly On Your Website!
                            </CardTitle>
                            <div>
                              Activate the Amusingly widget on your website by
                              copying and pasting the following code between and
                              tags of your site's HTML file:
                            </div>
                            <div>
                              <textarea
                                ref={c => {
                                  this.widgetTextArea = c;
                                }}
                                className="textarea-widget"
                                rows="6"
                                defaultValue={widgetCode}
                              />
                            </div>
                            <Button
                              className="btn-half"
                              size="sm"
                              color="primary"
                              onClick={e => this.handleSubmitWidget(e)}
                            >
                              Submit
                            </Button>{" "}
                            <Button
                              className="btn-half"
                              size="sm"
                              color="primary"
                              onClick={e => this.handleCopyWidgetCode(e)}
                            >
                              Copy Code
                            </Button>
                          </CardBody>
                        </Colxx>
                      </Row>
                    </TabPane>
                  </TabContent>
                </Card>
              </Colxx>
              <Colxx xss="6">
                <Card className="mb-4">
                  <Row>
                    {instagramImageList.map((image, index) => {
                      return (
                        <Colxx
                          sm="6"
                          lg="4"
                          xl="3"
                          className="mb-3"
                          key={image.CustomerInstaID}
                        >
                          <Card
                            onClick={event =>
                              this.handleCheckChange(
                                event,
                                image.CustomerInstaID
                              )
                            }
                            className={classnames({
                              active: this.state.selectedItems.includes(
                                image.CustomerInstaID
                              )
                            })}
                          >
                            <div className="position-relative">
                              <CardImg
                                top
                                alt={"No Image"}
                                src={image.ImageInstaUrl}
                              />
                              <Badge
                                color="secondary"
                                pill
                                className="position-absolute badge-top-left"
                              >
                                {this.state.selectedItems.includes(
                                  image.CustomerInstaID
                                )
                                  ? "Selected"
                                  : ""}
                              </Badge>
                            </div>
                          </Card>
                        </Colxx>
                      );
                    })}
                  </Row>
                </Card>
              </Colxx>
            </Row>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ instagram, settings }) => {
  const { instagramImageList } = instagram;
  const { locale } = settings;

  return {
    instagramImageList,
    locale
  };
};

export default connect(mapStateToProps, {
  saveNewWidget: widgetAdd,
  getInstagramImageList: instagramImageList
})(WidgetAddView);
