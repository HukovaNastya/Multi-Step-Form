import Button from "../Button/Button.tsx";
import Typography from "../Typography/Typography.tsx";
import './AccountOption.css';


const AccountOption = () => {
    return (
        <div className='account-option-wrapper d-flex'>
            <Button className='account-option-btn'>
               {/*<AccountIcon color='B991FF'/>*/}
            </Button>
            <div className='account-option-info'>
                <div>
                    <Typography variant='h4' className='text-medium'>
                        Hello word!

                    </Typography>
                </div>
                <div>
                  <Typography variant='h4' className='text-small'>
                      Hello World2
                  </Typography>
                </div>
            </div>
        </div>
    )

}

export default AccountOption;