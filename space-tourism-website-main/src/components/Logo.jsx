import { styled } from "styled-components";

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    > .logo-div {
        padding: 4.5rem 3.5rem;
        cursor: pointer;
    }
    > .hr-div {
        display: flex;
        flex: 1 0 auto;
        position: relative;
        > hr {
            flex: 1 0 auto;
            opacity: 0.25;
            border-width: 2px;
            position: absolute;
            top: 0;
            right: -2rem;
            width: 100%;
            z-index: 1;
        }
    }
`;

const Logo = () => {
    return (
        <LogoStyled>
            <div className="logo-div">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>
            <div className="hr-div">
                <hr />
            </div>
        </LogoStyled>
    );
}

export default Logo