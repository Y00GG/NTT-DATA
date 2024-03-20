import { ILoginForm } from "./ILoginForm";

export interface IAuthStore {
    user: ILoginForm | null,
    login: (user: ILoginForm) => void,
    logout: () => void,
}