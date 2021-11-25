import React from 'react';
import {ServicesContainer, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH1, ServicesP} from './Services';
import installation from '../../images/installation.jpg';
import laptop from '../../images/laptop.jpg';
import phone from '../../images/phone.jpg';
export const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>What we do</ServicesH1>
                <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={installation}/>
                        <ServicesH2>Cctv installation</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            lpa qui officia deserunt mollit anim id est laborum.</ServicesP>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={laptop}/>
                        <ServicesH2>Computer security</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            lpa qui officia deserunt mollit anim id est laborum. 
                          </ServicesP>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={phone}/>
                        <ServicesH2>Mobile insuarence</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </ServicesP>
                    
                </ServicesCard>
                </ServicesWrapper>
                <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={installation}/>
                        <ServicesH2>Cctv installation</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            lpa qui officia deserunt mollit anim id est laborum.</ServicesP>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={laptop}/>
                        <ServicesH2>Computer security</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            lpa qui officia deserunt mollit anim id est laborum. 
                          </ServicesP>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={phone}/>
                        <ServicesH2>Mobile insuarence</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            </ServicesP>
                    
                </ServicesCard>
                </ServicesWrapper>
                
            </ServicesContainer>
        </>
    )
}
export default Services