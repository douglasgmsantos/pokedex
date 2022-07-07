import { useCallback, useEffect, useState } from "react"

import { FaLongArrowAltUp } from 'react-icons/fa'

import { Container } from "./styles";

export default function ScrollPage() {
    const [pageYPosition, setPageYPosition ] = useState(0);

    const getPageYAfterScroll = useCallback(() => {
        setPageYPosition(window.scrollY);
    },[]);

    const getTopPage = useCallback(() => {
        window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        window.addEventListener('scroll', getPageYAfterScroll);
    })

    return (
        <>
            {pageYPosition > 900 && (
                <Container onClick={getTopPage}  >
                    <FaLongArrowAltUp />
                </Container>
            )}
        </>
    )
}
