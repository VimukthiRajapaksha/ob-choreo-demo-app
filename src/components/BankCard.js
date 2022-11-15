export const BankCard = (bank) => {
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
                <a href="#" className="social-link"><i className="bi bi-plus-lg"></i></a>
            </li>
        );
};