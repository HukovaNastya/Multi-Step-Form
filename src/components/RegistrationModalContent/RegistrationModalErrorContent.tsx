import useUserMutation from "../../hooks/useUserMutation.ts";

const RegistrationModalErrorContent = () => {
    const {error}  = useUserMutation()
    return (
       <div>
           {error?.message}
       </div>
    )
}

export default RegistrationModalErrorContent;