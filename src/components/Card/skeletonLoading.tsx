import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { Avatar, Container, ContainerStatValue, Header, ID, Info, Name, Stat, StatKey, Stats, StatValue, Type, Types } from './styles'

interface SkeletonLoadingProps {
    type: string;
}

export default function SkeletonLoading({ type }: SkeletonLoadingProps) {
    return (
        <SkeletonTheme baseColor="#FFF" highlightColor="#444">
            <Container type={type}>
                <Info>
                    <Name type={type} >
                        <Skeleton count={1} />
                    </Name>
                    <ID type={type}>
                        <Skeleton count={1} />
                    </ID>
                </Info>
                <Header>
                    <Skeleton circle={true} height={50} width={50} />
                </Header>
                <Types>
                    <Type type={type}>
                        <Skeleton count={1} />
                    </Type>
                </Types>
                <Stats>
                    {[1,2,3,4,5,6].map(i => (
                        <Stat>
                            <Skeleton count={1} />
                        </Stat>
                    ))}
                </Stats>
            </Container>
        </SkeletonTheme>
        
    )
}
