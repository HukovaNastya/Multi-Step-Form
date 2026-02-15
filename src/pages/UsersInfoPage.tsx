import {useOnboardingFormData} from "../context/OnboardingFormContext.tsx";
import useUser from "../hooks/useUserQuery.ts";
import Typography from "../components/Typography/Typography.tsx";


const UsersInfoPage = () => {
    const {userId} = useOnboardingFormData();
    const {userInfo} = useUser(userId);

    console.log(userInfo)

    return (
        <div className='page-wrapper'>
            {
                userId ? (
                    <Typography className='form-text text-medium' variant='h3'>
                        Hello dear User!
                    </Typography>) : (
                    <Typography className='text-large' variant='h3'>
                        There is no registered user yet!
                    </Typography>
                )
            }
        </div>
    )
}

export default UsersInfoPage;
