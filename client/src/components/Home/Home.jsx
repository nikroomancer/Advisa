import React, { Component } from 'react';
import PageContainer from '../../styles/PageContainer';
import ValueBox from '../ValueBox/ValueBox';

class Home extends Component {
    render() {
        return (
            <PageContainer><ValueBox/></PageContainer>
        );
    }
}

export default Home;
