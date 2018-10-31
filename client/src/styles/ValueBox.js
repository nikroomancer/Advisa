import styled, {css}from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    @media (max-width: 767px) {
      display: block;
    }
    list-style: none;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
`;

export const Box = styled.li`
    padding: 20px;
    width: 230px;
    height: 230px;
    margin: 0 auto;
`;

export const BoxInner = styled.div`
    background: lightskyblue;
    width: 100%;
    height: 100%;
    border: 2px solid #9b9797;
    border-radius: 4px;
    padding: 20px;
    ${props => props.alternateColor && css`
        background: salmon;
    `};
    ${props => props.alternatePadding && css`
        padding: 30px;
    `};
`;

export const ValueText = styled.p`
    font-size: 16px;
    display: inline-block;
    margin: calc(50% - 8px) 10px 0 0;
    width: 50%;
    ${props => props.alternateMargin && css `
        margin: 0;
        vertical-align: bottom;
        &:nth-child(1){
            margin-top: calc(50% - 16px);
        }
    `};
`;

export const ValueInput = styled.input`
    font-size: 16px;
    display: inline-block;
    width: calc(50% - 10px);
    ${props => props.alternateWidth && css `
      width: 30%;
    `};
`;

export const ReusultContainer = styled.p`
    text-align: center;
    word-wrap: break-word;
    &:before{
        content:'Result: '
    }
`;

