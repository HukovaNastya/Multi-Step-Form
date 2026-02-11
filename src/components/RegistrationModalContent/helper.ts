import RegistrationModalInfoContent from "./RegistrationModalInfoContent.tsx";
import {Contents} from "./interface.ts";
import RegistrationModalLoadingContent from "./RegistrationModalLoadingContent.tsx";
import RegistrationModalErrorContent from "./RegistrationModalErrorContent.tsx";

export const ComponentsMapping = {
    [Contents.Info]: RegistrationModalInfoContent,
    [Contents.Loading]: RegistrationModalLoadingContent,
    [Contents.Error]: RegistrationModalErrorContent
}