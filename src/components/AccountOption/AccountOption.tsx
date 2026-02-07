import React from "react";
import Button from "../Button/Button.tsx";
import Typography from "../Typography/Typography.tsx";
import './AccountOption.css';
import AccountIcon from "../../assets/icons/AccountIcon.tsx";
import {useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
import localStorageService from '../../hooks/useStorage.tsx';

const storageKeys = localStorageService.Local_Storage_Keys;

interface AccountOptionProps {
    title?:string;
    text?:string;
    account:string;
}

const AccountOption:React.FC<AccountOptionProps> = ({title, text, account}) => {
    const {accountType} = useOnboardingFormData()

    const handleClick = (type:string) => {
        if (!accountType.current) return;

        accountType.current.accountType = type;
        localStorageService.setItem({
            key: storageKeys.AccountType,
            value: type,
        });
    }
    return (
        <div className='account-option-wrapper d-flex align-center'>
            <Button className='account-option-btn' type='button' onClick={() => handleClick(account)}>
               <AccountIcon/>
            </Button>
            <div className='account-option-info'>
                <div>
                    <Typography variant='h4' className='text-medium font-title'>
                        {title}
                    </Typography>
                </div>
                <div>
                  <Typography variant='h4' className='text-small form-text'>
                      {text}
                  </Typography>
                </div>
            </div>
        </div>
    )

}

export default AccountOption;