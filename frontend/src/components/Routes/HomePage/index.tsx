import { StyledHome, DivContainer, Div, Button, TextTitle, TextParagraph } from './style';
import Header from '@/components/Complements/Header';
import { useRouter } from 'next/router';

const Homepage = () => {
    const router = useRouter();
    return (
        <>
            <Header />
            <StyledHome>
                <DivContainer>
                    <Div>
                        <TextTitle>Your complete and secure online contact list</TextTitle>
                        <TextParagraph>store all your contacts easily and extremely securely.</TextParagraph>
                        <Button onClick={() => router.push('register')}>Register now</Button>
                    </Div>
                </DivContainer>
            </StyledHome>
        </>
    );
}

export default Homepage;
