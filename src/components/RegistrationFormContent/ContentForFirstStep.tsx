import Typography from "../Typography/Typography.tsx";
import AccountOption from "../AccountOption/AccountOption.tsx";
import {useOnboardingFormApi, useOnboardingFormData} from "../../context/OnboardingFormContext.tsx";
import Button from "../Button/Button.tsx";


const ContentForFirstStep = () => {
    const { accountType } = useOnboardingFormData()
    const { setAccountTypeValue, onTriggerNext } = useOnboardingFormApi()

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
                 text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                 active={accountType.type === "personal"}
                 onSelect={() => setAccountTypeValue('personal')}
             />
             <AccountOption
                 title='Business Account'
                 text ='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                 active={accountType.type === "business"}
                 onSelect={() => setAccountTypeValue('business')}
             />
          </div>

          <div className='form-buttons d-flex justify-end'>
              <div>
                  <Button
                      className='form-button text-medium form-text active-button'
                      onClick={() => {
                         onTriggerNext()
                      }}
                      type='button'
                  >
                      Next
                  </Button>
              </div>
          </div>
      </div>
    )
}

export default ContentForFirstStep