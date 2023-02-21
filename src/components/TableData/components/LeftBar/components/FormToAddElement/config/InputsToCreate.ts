import { v4 } from 'uuid';

export const InputsToCreate ={
    modules:[
        {
            id: v4(),
            name: 'name',
            value: '',
            type: 'text',
            form_label: 'Name',
            helper_text: 'Example: Subjects',
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
            helper_text: 'Some words to describe the module.',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
    ],
    roles:[
        {
            id: v4(),
            name: 'name',
            value: '',
            type: 'text',
            form_label: 'Name',
            helper_text: 'Example: Viewer',
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
            helper_text: 'Some words to describe the role.',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
    ],
}