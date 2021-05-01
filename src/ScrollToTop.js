import React, {Component} from 'react';
import {withRouter} from 'react-router';

//Link를 통한 페이지 변경 시 스크롤을 최상단으로 옮긴다.

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop)
