import { v4 } from "uuid";

export const INPUTS_TO_RENDER:any = {
    roles:[
        {
            id: v4(),
            name: 'name',
            value: '',
            type: 'name',
            form_label: 'Role name',
            helper_text: 'Example: viewer',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
        {
            id: v4(),
            name: 'description',
            value: '',
            type: 'textarea',
            form_label: 'Description',
            helper_text: 'Some words to describe the role.',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
    ],
    modules:[
        {
            id: v4(),
            name: 'name',
            value: '',
            type: 'name',
            form_label: 'Module name',
            helper_text: 'Example: Sales',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
        {
            id: v4(),
            name: 'description',
            value: '',
            type: 'textarea',
            form_label: 'Description',
            helper_text: 'Some words to describe the module.',
            max_length: 50,
            min_length: 5,
            isRequired: true
        },
    ]
}