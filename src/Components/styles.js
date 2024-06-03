import styled from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: center;
width: 100vw;
height: 80px;
background-color: #ec7000;
`

export const Container = styled.div`
width: 100vw;
`

export const ContainerItens = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
max-width: 80%;
padding: 0 50px;
margin: 0 auto;
`

export const Img = styled.img`
display: flex;
align-items: center;
margin: 0 20px;
cursor: pointer;
`

export const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
`

export const ButtonItemMenu = styled.li`
cursor: pointer;
color: #fff;
display: flex;
align-items: center;
font-weight: bold;
gap: 10px;
`

export const DivButtonAccess = styled.div`
display: flex;
align-items: center;
height: 60%;
padding: 0 20px;
background-color: #106eb0;
cursor: pointer;
border-radius: 3px;
`

export const ButtonAccess = styled.button`
display: flex;
align-items: center;
background-color: transparent;
border: none;
gap: 5px;
color: #fff;
font-weight: bold;
height: 100%;
cursor: pointer;
`