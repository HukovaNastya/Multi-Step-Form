import ContentForFirstStep from "./ContentForFirstStep.tsx";
import ContentForSecondStep from "./ContentForSecondStep.tsx";
import ContentForThirdStep from "./ContentForThirdStep.tsx";
import {Steps} from "./interface.tsx";

export const StepsMapping = {
    [Steps.FirstStep]: ContentForFirstStep,
    [Steps.SecondStep]: ContentForSecondStep,
    [Steps.ThirdStep]: ContentForThirdStep
}

