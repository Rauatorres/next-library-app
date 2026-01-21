import { getCookie } from "../../session/cookieActions";

const CookieTest = async () => {
    return (
        <h1>{getCookie('name')}</h1>
    );
};

export default CookieTest