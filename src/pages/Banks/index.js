import { Navbar } from "../../components/common/Navbar";
import { Footer } from "../../components/common/Footer"
import { BankList } from "./BankList";
import { useState } from "react";
import { BankToast } from "../../components/BankToast";
import { CONSTANTS } from "../../services/utils";
import BankData from "../../data/BankData.json";

export const Banks = () => {
    
    let newBanks = JSON.parse(sessionStorage.getItem(CONSTANTS.new_banks));
    let addedBanks = JSON.parse(sessionStorage.getItem(CONSTANTS.added_banks));
    const [isBankAdding, setIsBankAdding] = useState(false);

    const updateSession = (data) => {
        sessionStorage.setItem(CONSTANTS.new_banks, JSON.stringify(data.newBanks));
        sessionStorage.setItem(CONSTANTS.added_banks, JSON.stringify(data.addedBanks));
    }

    if (!newBanks || !addedBanks) {
        newBanks = BankData.newBanks;
        addedBanks = BankData.addedBanks;

        updateSession({newBanks, addedBanks});
    }

    const updateBankList = bankId => {
        const index = newBanks.findIndex((bank => bank.id === bankId));
        if (index > 0) {
            const newlyAddedBank = newBanks[index];
            newlyAddedBank.isAdded = true;
            
            addedBanks.push(newlyAddedBank);
            newBanks.splice(index, 1);
            
            updateSession({newBanks, addedBanks});
        }
    }

    return (
        <>
            <Navbar selectedTabName="Banks" />
            <div className="container-md mt-4">
                <BankList title="Link my other bank" banks={newBanks} 
                    setIsBankLoading={setIsBankAdding} updateBankList={updateBankList} />
            </div>
            <br />
            <div className="container-md">
                <BankList title="Added banks" banks={addedBanks} isBankLoading={isBankAdding} />
            </div>
            <br />
            <BankToast />
            <Footer />
        </>
    )
}    

