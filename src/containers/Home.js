import React, { Component } from 'react';
import { connect } from 'react-redux';
import { latestNews } from '../actions'; // import actions for the lastesNews component
import { bindActionCreators } from 'redux'; // import this to bind the actions

// component
import LatestNews from '../components/home/LatestNews';

class Home extends Component {
    render() {
        return (
            <div>
                <LatestNews/>
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
    return bindActionCreators({latestNews}, dispatch) // takes in the action and ...
}

export default connect(mapStateToProps, null)(Home);