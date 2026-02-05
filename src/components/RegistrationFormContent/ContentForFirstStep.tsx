// import {useEffect, useState} from "react";
import Typography from "../Typography/Typography.tsx";
import AccountOption from "../AccountOption/AccountOption.tsx";

// import localStorageService from '../../hooks/useStorage.tsx';
//
// const storageKeys = localStorageService.Local_Storage_Keys;

const ContentForFirstStep = () => {
    // const [activeAccount, setAccountActive] = useState(null);
    // useEffect(() => {
    //     const accountType = localStorageService.getItem(storageKeys.AccountType)
    //     if (accountType?.length) {
    //         setAccountActive(accountType)
    //     }
    // }, [])

    // useEffect(() => {
    //     if (activeAccount !== null) {
    //         console.log("Account type updated:", activeAccount);
    //     }
    // }, [activeAccount]);
    return (
      <div className="content d-flex flex-column">
          <div className="section-title">
             <Typography variant='h4' className='text-small content-title form-text'>
                 Chose your account type
             </Typography>
          </div>
          <div className='form-account-options'>
             <AccountOption title='Personal Account' text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'  accountType='personal'/>
             <AccountOption title='Business Account' text ='Lorem ipsum dolor sit amet consectetur adipisicing elit.' accountType='business'/>
          </div>
      </div>
    )
}

export default ContentForFirstStep