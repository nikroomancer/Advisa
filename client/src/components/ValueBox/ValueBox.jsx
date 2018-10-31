import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeType, updateValue, updateResult} from "../../actions/calculator";
import {Wrapper, Box, BoxInner, ValueText, ValueInput, ReusultContainer} from '../../styles/ValueBox';

const mapStateToProps = ({calculator}) => {
    return calculator;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeType: (type) => dispatch(changeType(type)),
        onUpdateValue: (value, valueBox) => dispatch(updateValue(value, valueBox)),
        onUpdateResult: (result) => dispatch(updateResult(result))
    };
};

class ValueBox extends Component {

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            this.calculateValue();
        }
    }

    checkValueForDigits = (value, valueBox) => {
        const {onUpdateValue} = this.props;
        const regex = new RegExp(/^\d+$/);
        if(regex.test(value)){
            onUpdateValue(parseInt(value),valueBox);
        }else{
            onUpdateValue('',valueBox);
        }
    };

    calculateValue = () => {
        const {firstValue, secondValue, thirdValue, type, onUpdateResult} = this.props;
        const values = [firstValue, secondValue, thirdValue];
        let startValue = type === 'add' ? 0 : 1;
        const result = values.reduce(this.getSum, startValue);
        //should use constants for add, multiply, subtract etc... but not going to do that now :)
        onUpdateResult(result);
    };

    getSum = (total, num) => {
        const {type} = this.props;
        if(type === 'add'){
            return num !== '' ? total + num : total;
        }else{
            return num !== '' ? total * num : total;
        }
    };

    render() {
        const {onChangeType, result, type, secondValue, firstValue, thirdValue} = this.props;

        return (
            <Wrapper>
                <Box>
                    <BoxInner>
                        <ValueText>input 1:</ValueText>
                        {/*firstValue, secon... should be constants*/}
                        <ValueInput value={firstValue}  onChange={(e) => this.checkValueForDigits(e.currentTarget.value, 'firstValue')}/>
                    </BoxInner>
                </Box>
                <Box>
                    <BoxInner>
                        <ValueText>input 2:</ValueText>
                        <ValueInput value={secondValue} onChange={(e) => this.checkValueForDigits(e.currentTarget.value, 'secondValue')}/>
                    </BoxInner>
                </Box>
                <Box>
                    <BoxInner>
                        <ValueText>input 3:</ValueText>
                        <ValueInput value={thirdValue}  onChange={(e) => this.checkValueForDigits(e.currentTarget.value, 'thirdValue')}/>
                    </BoxInner>
                </Box>
                <Box>
                    <BoxInner alternateColor alternatePadding>
                        <ValueInput alternateWidth type={"radio"} name={'choice'} checked={type === 'add'} onChange={() => onChangeType('add')}/>
                        <ValueText alternateMargin>Sum</ValueText>
                        <ValueInput alternateWidth type={"radio"} name={'choice'} checked={type === 'multiply'} onChange={() => onChangeType('multiply')}/>
                        <ValueText alternateMargin>Multiply</ValueText>
                        <ReusultContainer>{result}</ReusultContainer>
                    </BoxInner>
                </Box>
            </Wrapper>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValueBox);
