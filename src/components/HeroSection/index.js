import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForword, ArrowRight } from './HeroSection';
import { Button } from '../Sidebar/Button';

export const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Be Secure with us</HeroH1>
                <HeroP>We offer new cutting edge surveillance systems for your home and business.  </HeroP>
                <HeroBtnWrapper>
                    <Button to='enquire' onMouseEnter={onHover} onnMouseLeave={onHover} primary="true" dark="true">
                    Get in touch with us {hover ? <ArrowForword /> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
            
        
    );
};
export default HeroSection;