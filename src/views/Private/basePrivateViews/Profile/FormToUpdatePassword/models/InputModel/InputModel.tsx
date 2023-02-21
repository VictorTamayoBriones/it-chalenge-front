export interface IInputModel{
    id: string,
    name: string,
    value: string,
    type: string,
    form_label: string,
    helper_text: string,
    max_length: number,
    min_length: number,
    isRequired: boolean
}

export interface ILoginData{
    name: string,
    value: string
}