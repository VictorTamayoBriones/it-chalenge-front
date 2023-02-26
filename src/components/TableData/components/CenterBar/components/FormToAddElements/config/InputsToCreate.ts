import { v4 } from 'uuid';

export const InputsToCreate ={
    actions:[
        {
            id: v4(),
            name: 'action_name',
            value: '',
            type: 'text',
            form_label: 'Action name',
            helper_text: 'Example: Search',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
        {
            id: v4(),
            name: 'description',
            value: '',
            type: 'text',
            form_label: 'Description',
            helper_text: 'Some words to describe the action.',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
        {
            id: v4(),
            name: 'is_active',
            value: false,
            type: 'text',
            form_label: 'Is active',
            helper_text: 'Enable this action',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
        {
            id: v4(),
            name: 'module_id',
            value: '',
            type: 'text',
            form_label: 'modules',
            helper_text: 'Select a module to assing the action.',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
    ],
}