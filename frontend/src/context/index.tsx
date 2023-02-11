import ProviderUser from "./userContext";
import ProviderPage from "./pageContext";

interface Children {
    children?: JSX.Element|JSX.Element[];
}
const ProvidersAll = ({ children }: Children) => {
    return (
        <ProviderPage>
            <ProviderUser>
                {children}
            </ProviderUser>
        </ProviderPage>
    )

};

export default ProvidersAll;