import { BankCard } from "../../components/BankCard";

export const ListBanks = ({title, banks}) => {
  
  let bankCards = banks.map((bank) => {
    return <BankCard key={bank.id} {...bank} />;
  });

  return (
    <div className="container-md bg-light rounded">
      
      <div className="container-md py-3" id="section-title">
        <h3>{title}</h3>
      </div>

      <div className="row text-center mx-2" id="section-body">
          {bankCards}
      </div>

    </div>
  );
};
