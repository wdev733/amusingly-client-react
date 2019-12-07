import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import IntlMessages from "Util/IntlMessages";

import { widgetList } from "Redux/actions";

import {
  Row,
  Card,
  Button,
  Link
} from "reactstrap";
import { NavLink } from "react-router-dom";

import { Colxx, Separator } from "Components/CustomBootstrap"

class WidgetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading:false
    };
  }

  componentDidMount() {
    this.props.getWidgetList();
  }

  navigateWidgetAddView = (e) => {
    const { history } = this.props;
    history.push('./add');
  }

  render() {

    const { widgetList } = this.props;

    return (
      <Fragment>
        <div className="disable-text-selection">
          <Row>
            <Colxx xxs="12">
              <div className="mb-2">
                <h1>
                  Widgets
                </h1>
                <div className="float-sm-right">
                  <Button
                    color="primary"
                    size="lg"
                    className="top-right-button"
                    onClick={(e) => this.navigateWidgetAddView(e)}
                  >
                    <IntlMessages id="layouts.add-new" />
                  </Button>
                  {" "}<span> </span>
                </div>
              </div>
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row>
            {widgetList.length > 0 && widgetList.map(widget => {
                return (
                  <Colxx xxs="12" key={widget.embed_id} className="mb-3">
                    <Card>
                      <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                        <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                          <NavLink
                            to={`./view/${widget.embed_id}`}
                            className="w-40 w-sm-100"
                          >
                            <p className="list-item-heading mb-1 truncate">
                              {widget.widget_type}
                            </p>
                          </NavLink>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            {widget.widget_style}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Colxx>
                );
              })}
          </Row>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ widget, instagram, settings }) => {
  
  const { widgetList } = widget;
  const { instagramImageList } = instagram;
  const { locale } = settings;

  return {
    instagramImageList,
    widgetList,
    locale
  };
};

export default connect(
  mapStateToProps,
  {
    getWidgetList: widgetList
  }
)(WidgetList);
