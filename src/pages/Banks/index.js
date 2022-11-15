import { Navbar } from "../../layouts/header/Navbar";
import {newBanks, addedBanks} from "../../utils/constants";
import { ListBanks } from "./ListBanks";

export const Banks = () => {
    return (
        <>
            <Navbar selectedTabName="Banks" />

            <div className="container-md">
                <ListBanks title="Link my other bank" banks={newBanks} />
            </div>

            <br /><br />
            
            <div className="container-md">
                <ListBanks title="Added banks" banks={addedBanks} />
            </div>
        </>
    )
}    

