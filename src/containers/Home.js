import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews, otherNews } from '../actions'; // import actions for the lastesNews component
import { bindActionCreators } from 'redux'; // import this to bind the actions

// component
import LatestNews from '../components/home/LatestNews';
import OtherNews from '../components/home/OtherNews';

class Home extends Component {

    componentDidMount() {
        this.props.latestNews();
        this.props.otherNews();
    }

    render() {
        return (
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews otherNews={this.props.articles.other}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({latestNews, otherNews}, dispatch) // takes in the action and ...
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);