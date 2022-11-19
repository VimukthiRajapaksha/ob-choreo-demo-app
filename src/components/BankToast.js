import { useEffect, useState } from "react";
import { CONSTANTS } from "../services/utils";

export const BankToast = () => {
    
    const [toast, setToast] = useState(null);

    useEffect (() => {
        const redirect_response = sessionStorage.getItem(CONSTANTS.redirect_response);
        if (redirect_response) {
            setToast(JSON.parse(redirect_response));
            sessionStorage.removeItem(CONSTANTS.redirect_response);
        };
    });

    return ( toast &&
        <div aria-live="polite" aria-atomic="true" className="position-relative">
            <div className="toast-container bottom-0 end-0 p-3">
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">{toast.message}</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">{toast.description}</div>
                </div>
            </div>
        </div>
    )
}