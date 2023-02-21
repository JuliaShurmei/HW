
import styled from 'styled-components';

const Link_Wrapper = styled.div`
  color: pink;
`

interface Link {
    href: string;
    value: string;
    className: string;
}

export const Links =({href, value, className} : Link) => {
    return (
        <Link_Wrapper>
        <a href={href} className={className}> {value} </a>
        </Link_Wrapper>
    )
    }