
import { IInputModel } from '@/views/Login';
import { v4 } from 'uuid';

export const INPUTS_TO_RENDER: IInputModel[] = [
    {
        id: v4(),
        name: 'email',
        value: '',
        type: 'email',
        form_label: 'Email',
        helper_text: 'example@palmer.com',
        max_length: 50,
        min_length: 5,
        isRequired: true
    },
    {
        id: v4(),
        name: 'is_active',
        value: '',
        type: 'text',
        form_label: 'Status',
        helper_text: 'able or unable this user',
        max_length: 50,
        min_length:8,
        isRequired: true
    },
    {
        id: v4(),
        name: 'role_name',
        value: '',
        type: 'text',
        form_label: 'Role Name',
        helper_text: 'Select a role to user',
        max_length: 50,
        min_length:8,
        isRequired: true
    }
]