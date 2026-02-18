import {useOnboardingFormData} from "../context/OnboardingFormContext.tsx";
import useUser from "../hooks/useUserQuery.ts";
import Typography from "../components/Typography/Typography.tsx";
import RegistrationModalContentItem from "../components/RegistrationModalContent/RegistrationModalContentItem.tsx";


const UsersInfoPage = () => {
    const {userId} = useOnboardingFormData();
    const {userInfo} = useUser(userId);

    console.log(userInfo)

    return (
        <div className='page-wrapper'>
            {
                userId ? (
                   <div className='registration-form-wrapper registration-form d-flex flex-column'>
                       <div className='registration-modal-content-header'>
                           <Typography className='form-title text-large' >
                               User Information:
                           </Typography>
                       </div>
                       <div>
                           <RegistrationModalContentItem title='Account Type:' text={userInfo?.accountType}/>
                           <RegistrationModalContentItem title='Name:' text={userInfo?.name}/>
                           <RegistrationModalContentItem title='Email:' text={userInfo?.email}/>
                           <RegistrationModalContentItem title='Age:' text={`${userInfo?.age}`}/>
                           <RegistrationModalContentItem title='Area of Interest:' text={userInfo?.interests}/>
                           <RegistrationModalContentItem title='Bio/Description:' text={userInfo?.description}/>

                       </div>
                   </div>
                ) : (
                    <Typography className='text-large' variant='h3'>
                        There is no registered user yet!
                    </Typography>
                )
            }
        </div>
    )
}

export default UsersInfoPage;
