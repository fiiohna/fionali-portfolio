import React from 'react';
import Icon1 from '../../images/PetPals.png';
import Icon2 from '../../images/ZilHive2.png';
import { AchievementContainer, AchievementH1, AchievementWrapper, AchievementCard, IconWrap, AchievementIcon, AchievementH2, AchievementP} from './AchievementElements'
const Achievement = () => {
  return (
    <AchievementContainer>
        <AchievementH1>Achievement</AchievementH1>
        <AchievementWrapper>
            <AchievementCard>
                <IconWrap><AchievementIcon src={Icon1}></AchievementIcon></IconWrap>
                <AchievementH2>Google Ignite! 2022</AchievementH2>
                <AchievementP>Some quick example text to build on the card title and make up
                  the bulk of the card's content.</AchievementP>
            </AchievementCard>
            <AchievementCard>
            <IconWrap><AchievementIcon src={Icon2}></AchievementIcon></IconWrap>
                <AchievementH2>ZilHive</AchievementH2>
                <AchievementP></AchievementP>
            </AchievementCard>
            <AchievementCard>
            <IconWrap><AchievementIcon src={Icon1}></AchievementIcon></IconWrap>
                <AchievementH2>PetPals</AchievementH2>
                <AchievementP>Some quick example text to build on the card title and make up
                  the bulk of the card's content.</AchievementP>
            </AchievementCard>
            <AchievementCard>
            <IconWrap><AchievementIcon src={Icon2}></AchievementIcon></IconWrap>
                <AchievementH2>ZilHive</AchievementH2>
                <AchievementP>Some quick example text to build on the card title and make up
                  the bulk of the card's content.</AchievementP>
            </AchievementCard>
        </AchievementWrapper>
    </AchievementContainer>
  )
}

export default Achievement