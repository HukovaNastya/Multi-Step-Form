import {useOnboardingFormData} from "../context/OnboardingFormContext.tsx";
import useUser from "../hooks/useUserQuery.ts";


const UsersInfoPage = () => {
    const {userId} = useOnboardingFormData();
    console.log(userId)
    const {userInfo, isLoading} = useUser(userId);

    console.log(userInfo)
    if (!userInfo && !isLoading) return (<div>User not found</div>);

    return (
       <div>
           <h1>Hello Dear User!</h1>
           <h2>{userId ? userId : null}</h2>
           {/*<h3>{userInfo?.name}</h3>*/}
       </div>
    )
}

export default UsersInfoPage;