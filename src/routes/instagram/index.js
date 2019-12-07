import React, { Component, Fragment } from "react";

import { connect } from 'react-redux';

import {
  Row,
  Card,
  CardBody,
  CardImg,
  CardText,
  Badge
} from "reactstrap";

import Switch from "rc-switch";

import classnames from "classnames";

import IntlMessages from "Util/IntlMessages";
import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";

import {
  instagramImageList,
  instagramImageStatusChange
} from "Redux/actions";

import "rc-switch/assets/index.css";

class ImageListLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMode: "imagelist",
      isLoading: false,
      instagramImageList: []
    };
  }

  componentDidMount() {
    this.props.getInstagramImageList();
  }

  componentWillReceiveProps(props) {
    const { instagramImageList } = props;
    this.setState({
      'instagramImageList': [
        ...instagramImageList
      ]
    });
  }

  handleCheckItem = imageIndex => {

    this.setState((state) => {
      state.instagramImageList[imageIndex].Status = state.instagramImageList[imageIndex].Status == 1 ? 0 : 1;
      return {
        instagramImageList: state.instagramImageList
      }
    }, () => {
      const instaId = this.state.instagramImageList[imageIndex].CustomerInstaID;
      const status = this.state.instagramImageList[imageIndex].Status;
      this.props.updateImageStatus(instaId, status);
    });
  }

  render() {
    const { instagramImageList } = this.state;
    
    return (
      instagramImageList.length === 0 ?
        <div className="loading"></div>
        :
        <Fragment>
          <div className="disable-text-selection">
            <Row>
              <Colxx xxs="12">
                <div className="mb-2">
                  <h1>
                    <IntlMessages id="menu.instagram" />
                  </h1>
                  <BreadcrumbItems match={this.props.match} />
                </div>
                <Separator className="mb-5" />
              </Colxx>
            </Row>
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
                        className={classnames({
                          active: image.Status == 1
                        })}
                      >
                        <div className="position-relative">
                          <CardImg
                            top
                            alt={"No Image"}
                            src={image.ImageInstaUrl}
                          />
                          <Badge
                            color={image.Status == 1 ? "primary" : "secondary"}
                            pill
                            className="position-absolute badge-top-left"
                          >
                            {image.Status == 1 ? "Show" : "Hide"}
                          </Badge>
                        </div>
                        <CardBody>
                          <Row>
                            <Colxx xxs="6">
                              <Switch
                                className="custom-switch custom-switch-primary"
                                checked={image.Status == 1 ? true : false}
                                onChange={imageIndex =>
                                  this.handleCheckItem(index)
                                }
                              />
                            </Colxx>
                            <Colxx xxs="6" className="mb-3">
                              <CardText className="text-muted text-medium mb-0 font-weight-light">
                                {image.ImageLikes} Likes
                              </CardText>
                            </Colxx>
                          </Row>
                        </CardBody>
                      </Card>
                    </Colxx>
                  );
                } )}
            </Row>
          </div>
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

export default connect(
  mapStateToProps,
  {
    getInstagramImageList: instagramImageList,
    updateImageStatus: instagramImageStatusChange
  }
)(ImageListLayout);
