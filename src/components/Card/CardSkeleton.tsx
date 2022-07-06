import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import {  Container, Header, ID, Info, Name, Stat, Stats, Type, Types } from './styles'

interface SkeletonLoadingProps {
    type: string;
}

export default function CardSkeleton({ type }: SkeletonLoadingProps) {
    return (
        <SkeletonTheme baseColor="var(--primary)" highlightColor="var(--secondary)">
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
