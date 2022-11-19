import { generateAccountAccessConsent } from "../services/account-service"
import { getAuthorizationURL } from "../services/oauth2-service"
import { getAppAccessToken } from "../services/token-service";
import { CONSTANTS } from "../services/utils";

export const BankCard = ({bank, setIsBankLoading, updateBankList}) => {

    const handleBankAdd = async (event, bankId) => {
        
        event.preventDefault();
        if (setIsBankLoading) setIsBankLoading(true);
        
        try {
            
            let app_access_token = sessionStorage.getItem(CONSTANTS.app_access_token);
        
            if (!app_access_token) {

                const tokenResponse = await getAppAccessToken();
                app_access_token = tokenResponse.data.access_token;

                // add application access token to session storage
                sessionStorage.setItem(CONSTANTS.app_access_token, app_access_token);
                console.log("generated application access token");
            } else {
                console.log("found an application access token");
            }

            // generate consent id
            const consentResponse = await generateAccountAccessConsent(app_access_token);
            const consent_id = consentResponse.data.Data.ConsentId;;
            console.log("generated new consent id: " + consent_id)
            updateBankList(bankId);

            // generate authorization url
            const authorizeResponse = await getAuthorizationURL(consent_id, app_access_token)
            console.log("redirecting to ", authorizeResponse.data);
            window.location.replace(authorizeResponse.data);
        } catch (error) {
            console.log(error);
        }
    }

    /*
    This method will load add, edit, and delete icons
    Displays add icon if bank is not added
    Displays edit, delete icons if bank is already added
    */
    const loadBankFunctions = (bank) => {
        return bank.isAdded ? 
            (
                <>
                    <li className="list-inline-item">
                        <a href="#" className="social-link"><i className="bi bi-pencil"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="social-link"><i className="bi bi-trash3"></i></a>
                    </li>
                </>
            ):
            (
                <li className="list-inline-item">
                    <button type="button" className="social-link" onClick={e => handleBankAdd(e, bank.id)}>
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </li>
            );
    };

    return (
        <div className="col-xl-3 col-sm-6 mb-5" id="bank-card">
            <div className="bg-enabled rounded shadow-sm py-5 px-4" >
                <img src={bank.logo} alt="" width="128" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">{bank.name}</h5>
                <span className="small text-uppercase text-muted">{bank.country}</span>
                <ul className="social mb-0 list-inline mt-3">
                    {loadBankFunctions(bank)}
                </ul>
            </div>
        </div>
    );
};
