/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Carousel, WingBlank } from "antd-mobile"

class Slide extends Component {
  state = {
    data: ['1', '2', '3'],
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['https://resource.51taouk.com/AdminImages/Content1/1/c313b11b-4e88-440a-b0ca-7dec42bb03b8.jpg?imageMogr2/format/webp/thumbnail/750x', 'https://resource.51taouk.com/AdminImages/Content1/1/a7240328-da2b-4223-bdde-326c52ceb100.jpg?imageMogr2/format/webp/thumbnail/750x','https://resource.51taouk.com/AdminImages/Content1/1/1429a517-0367-400d-a7dc-d0da86121ef1.jpg?imageMogr2/format/webp/thumbnail/750x','https://resource.51taouk.com/AdminImages/Content1/1/c986a59a-4c73-4579-848c-3a36c5579715.jpg?imageMogr2/format/webp/thumbnail/750x','https://resource.51taouk.com/AdminImages/Content1/1/77043802-ae84-477d-9e67-53e637a38e12.jpg?imageMogr2/format/webp/thumbnail/750x'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <div
              key={val}
              style={{touchAction: "pan-y"}}
            >
              <img
                src={val}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Slide;