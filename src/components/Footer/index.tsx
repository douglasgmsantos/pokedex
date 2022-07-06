import Link from 'next/link'
import React, { useState } from 'react'

import { IconType  } from "react-icons"
import { FaLinkedin, FaGithub  } from "react-icons/fa"

import { Container, Links } from './styles'

interface ISocial {
    label: string
    link: string;
    icon : IconType
}

export default function Footer() {
    const [social, setSocial] = useState<ISocial[]>([
        { label : "Linkedin", link : "https://www.linkedin.com/in/douglas-santos-72043436/", icon: FaLinkedin},
        { label : "Github", link : "https://github.com/douglasgmsantos", icon: FaGithub}
    ])
    return (
        <Container>

            <p>© 2022 | DOUGLAS GABRIEL MOTA DOS SANTOS</p>
            <Links>
                {social.map(({ label, link, icon:Icon }) => (
                    <Link  key={label} href={link} target="_blank">
                         <Icon aria-label={label} />
                    </Link>
                ))}
            </Links>
        </Container>
    )
}
