import { IInputModel } from "../../models";
import { v4 } from 'uuid';

export const INPUTS_TO_RENDER: IInputModel[] = [
    {
        id: v4(),
        name: 'actual_password',
        value: '',
        type: 'password',
        form_label: 'Actual password',
        helper_text: 'Must have more than 8 characters',
        max_length: 50,
        min_length: 8,
        isRequired: true
    },
    {
        id: v4(),
        name: 'new_password',
        value: '',
        type: 'password',
        form_label: 'New password',
        helper_text: 'Must have more than 8 characters',
        max_length: 50,
        min_length: 8,
        isRequired: true
    },
    {
        id: v4(),
        name: 'confirm_password',
        value: '',
        type: 'password',
        form_label: 'Confirm password',
        helper_text: 'Must have more than 8 characters',
        max_length: 50,
        min_length: 8,
        isRequired: true
    }
]