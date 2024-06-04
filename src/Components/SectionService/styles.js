import styled from "styled-components";

export const Section = styled.section`
width: 100%;
height: 100vh;
padding-top:128px;
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 75%;
padding: 0 50px;
margin: 0 auto;
`

export const DivLeft = styled.div`
flex: 1;
max-width: 600px;

span{
    display: block;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #ec7000;
    margin-bottom:35px;
}

h2{
    color: #33303e;
    font-size: 56px;
    font-weight: bold;
    line-height: 61px;
    height: 150px;
}
`

export const P = styled.p` 
    font-size: 18px;
    max-width: 560px;
    margin-bottom: 68px;
    color: #4e4b59;
`

export const Li = styled.li`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 36px;
border-bottom: 1px solid #7a7786;
padding-bottom:36px;
color: #7a7786;
width: 100%;
`

export const DivMask = styled.div`
width: 50px;
display: flex;
align-items: center;
justify-content: center;
`

export const Ul = styled.ul`
display: flex;
flex-direction: column;
align-items: start;
gap: 36px;
`

export const DivRight = styled.div`
display: flex;
justify-content: center;
width: 40%;
align-items: center;
`