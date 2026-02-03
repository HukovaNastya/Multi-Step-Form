import React from "react";
import Button from "../Button/Button.tsx";
import Typography from "../Typography/Typography.tsx";
import './AccountOption.css';
import AccountIcon from "../../assets/icons/AccountIcon.tsx";
import {useForm} from "../../context/FormContext.tsx";

interface AccountOptionProps {
    title?:string;
    text?:string;
    type:string;
}

const AccountOption:React.FC<AccountOptionProps> = ({title, text,  type}) => {
    const { setAccountType } = useForm();
    return (
        <div className='account-option-wrapper d-flex align-center'>
            <Button className='account-option-btn' onClick={() => setAccountType(type)}>
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