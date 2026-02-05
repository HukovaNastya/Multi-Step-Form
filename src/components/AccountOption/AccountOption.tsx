import React from "react";
import Button from "../Button/Button.tsx";
import Typography from "../Typography/Typography.tsx";
import './AccountOption.css';
import AccountIcon from "../../assets/icons/AccountIcon.tsx";
// import {useForm} from "../../context/OnboardingFormContext.tsx";
// import localStorageService from '../../hooks/useStorage.tsx';
//
//
// const storageKeys = localStorageService.Local_Storage_Keys;

interface AccountOptionProps {
    title?:string;
    text?:string;
    accountType:string;
}

const AccountOption:React.FC<AccountOptionProps> = ({title, text, }) => {
    // const { setAccountType } = useForm();
    //
    // const handleClick = (type:string) => {
    //     setAccountType(type)
    //     localStorageService.setItem({
    //         key: storageKeys.AccountType,
    //         value: type,
    //     });
    // }
    return (
        <div className='account-option-wrapper d-flex align-center'>
            <Button className='account-option-btn' type='button'>
            {/*<Button className='account-option-btn' onClick={() => handleClick(accountType)} type='button'>*/}
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