import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    width : 100%;
    height : 70px;
    background-color: darkblue;
    background: linear-gradient(45deg, darkblue, purple);
    display : flex;
    justify-content : space-between;
    align-items:center;
    position: relative;
    `;

const Title=styled.div`
    color: white;
    font-size: xx-large;
    margin-left: 2%;
    font-weight: 600;
    font-family: Times New Roman;
    text-transform: uppercase;
    &:hover{color : cyan}
    `;

const CartImg=styled.img`
    height:45px;
`;

const CartIconContainer = styled.div`
    position:relative;
    cursor:pointer;
    margin-right: 2%;
`;

const CartCount = styled.span`
    color: black;
    background-color: orange;
    padding: 4px 8px;
    position: absolute;
    border-radius: 50%;
    right: -15px;
    top: -5px;
    font-size: 15px;
    font-weight: 700;
    visibility:${(props)=>props.show?"visible":"hidden"}
`;

class Navbar extends React.Component{
    render(){
        const {cartCount} = this.props;
        console.log(this.props);
        return(
            <>
            <Nav>
                <Title>MOVIE APP</Title>
                <CartIconContainer>
                    <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
                    <CartCount show={cartCount>0?true:false}>{cartCount}</CartCount>
                </CartIconContainer>
            </Nav>
            </>
        )
    }
}

export default Navbar;