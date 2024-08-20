import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  min-height:100vh;
  overflow-y:auto;
  background-color: #eef4f7;
  padding:10px;
   display:flex;
  flex-direction:column;
  align-items:center;

 
`

export const TravelGuideTitle = styled.h1`
  color:#334155;
  border-bottom:2px solid #52bbf0;
  text-align:center;
  
  
`
export const TravelPlaceGuide = styled.ul`
 display:flex;
 flex-direction:row;
 justify-content:center;
 align-items:center;
 flex-wrap:wrap;
 height:100vh;
 @media screen and (max:width:576px){
  height:50vh;
  overflow-y:auto;
 }
`
