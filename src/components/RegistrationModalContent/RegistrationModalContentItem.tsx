import Typography from "../Typography/Typography.tsx";

type RegistrationModalContentItemProps = {
    title: string;
    text:string;
}

const RegistrationModalContentItem = ({title, text}: RegistrationModalContentItemProps) => {
    return (
        <div className='modal-content-item d-flex'>
            <Typography variant='h4' className='form-text  modal-text modal-content-title' >
                {title}
            </Typography>
            <Typography variant='h4' className='form-text  modal-subtext  modal-content-subtext' >
                {text}
            </Typography>
        </div>
    )
}

export default RegistrationModalContentItem;