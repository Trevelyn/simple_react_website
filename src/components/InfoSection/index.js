import React from 'react'
// import { Button } from 'react-scroll';
import { Column1, ImageWrap, InfoContainer, InfoWrapper, InfoRow, Column2, TextWrapper,Heading,Subtitle} from './Info';

export const InfoSection = ({lightBg, id, imgStart,lightText,headline,darkText,description,img,alt}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                       <TextWrapper>
                           <Heading lightText={lightText}>{headline}</Heading>
                           <Subtitle darkText={darkText}>{description}</Subtitle>
                       </TextWrapper>
                       </Column1>
                       <Column2>
                        <ImageWrap>
                            <img src={img}  />
                        </ImageWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
           </InfoContainer> 
        </>
    );
};
export default InfoSection