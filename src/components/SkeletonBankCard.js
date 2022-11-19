import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonBankCard = () => {
  return (
    <div className="col-xl-3 col-sm-6 mb-5">
        <div className="rounded shadow-sm py-5 px-4" >
        <SkeletonTheme baseColor="#EEEEEE" highlightColor="#FFFFFF">
        <Skeleton circle={true} height={128} width={128} />
        <h5 className="mt-1"><Skeleton width={"95%"} /></h5>
        <Skeleton width={"60%"} />

        <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
                <Skeleton circle={true} height={48} width={48} />
            </li>
            <li className="list-inline-item">
                <Skeleton circle={true} height={48} width={48} />
            </li>
        </ul>
        </SkeletonTheme>
        </div>
    </div>
  );
};
