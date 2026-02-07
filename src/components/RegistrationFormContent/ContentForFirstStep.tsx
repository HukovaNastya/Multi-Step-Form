import Typography from "../Typography/Typography.tsx";
import AccountOption from "../AccountOption/AccountOption.tsx";


const ContentForFirstStep = () => {
    return (
      <div className="content d-flex flex-column">
          <div className="section-title">
             <Typography variant='h4' className='text-small content-title form-text'>
                 Chose your account type
             </Typography>
          </div>
          <div className='form-account-options'>
             <AccountOption title='Personal Account' text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'  account='personal'/>
             <AccountOption title='Business Account' text ='Lorem ipsum dolor sit amet consectetur adipisicing elit.' account='business'/>
          </div>
      </div>
    )
}

export default ContentForFirstStep