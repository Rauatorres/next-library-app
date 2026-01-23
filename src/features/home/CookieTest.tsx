import { getCookie } from "../../session/cookieActions";

const CookieTest = async () => {
    return (
        <div>
            <h1>{getCookie('id')}</h1>
        </div>
    );
};

export default CookieTest