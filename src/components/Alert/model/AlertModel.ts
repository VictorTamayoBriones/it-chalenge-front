export interface AlertModel{
    isVisible: boolean,
    status: "info" | "warning" | "success" | "error" | "loading",
    title: string,
    description: string
}