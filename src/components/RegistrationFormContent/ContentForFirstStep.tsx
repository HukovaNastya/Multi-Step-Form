import {useState} from "react";
import Typography from "../Typography/Typography.tsx";
import AccountOption from "../AccountOption/AccountOption.tsx";
import localStorageService from "../../hooks/useStorage.tsx";

const storageKeys = localStorageService.Local_Storage_Keys;

const ContentForFirstStep = () => {
    const [selectedAccount, setSelectedAccount] = useState(() => localStorage.getItem(storageKeys.AccountType));

    console.log(selectedAccount)

    return (
      <div className="content d-flex flex-column">
          <div className="section-title">
             <Typography variant='h4' className='text-small content-title form-text'>
                 Chose your account type
             </Typography>
          </div>
          <div className='form-account-options'>
             <AccountOption
                 title='Personal Account'
                 text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'  a
                 account='personal'
                 active={selectedAccount === "personal"}
                 onSelect={setSelectedAccount}
             />
             <AccountOption
                 title='Business Account'
                 text ='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                 account='business'
                 active={selectedAccount === "business"}
                 onSelect={setSelectedAccount}
             />
          </div>
      </div>
    )
}

export default ContentForFirstStep