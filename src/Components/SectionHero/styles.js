import styled from 'styled-components'
import Background from '../../assets/bg-hero.jpg'

export const Section = styled.section`
background-image:url(${Background});
width: 100vw;
height: calc(100vh - 80px);
background-repeat:no-repeat;
background-position:center;
background-size:cover;
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
max-width: 78%;
padding: 0 50px;
position: absolute;
bottom: 0;
left: 14%;
`

export const DivLeft = styled.div`
flex: 1;
max-width: 500px;

h1{
    color: #fff;
    font-size: 72px;
    font-weight:bold;
    margin-bottom:16px;
}

p{
    color: #fff;
    font-size: 20px;
    max-width: 408px;
    margin-bottom: 32px;
}
`

export const Button = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
margin-right: 10px;
`

export const ButtonExplorer = styled.button`
background-color: transparent;
display: flex;
align-items: center;
border: none;
gap: 15px;
margin-top: 96px;

span{
    color: #fff;
    font-weight: bold;
}
`

export const ImageWoman = styled.img`
width: 800px;
`