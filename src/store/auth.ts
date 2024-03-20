import { create } from "zustand";
import { IAuthStore } from "../interfaces/IAuthStore";
import { persist } from "zustand/middleware";

const initialState = {
    user: null,
};

export const useAuthStore = create<IAuthStore>()(persist((set) => ({
    ...initialState,
    login: (user) => set({ user }), // Acción para loguear al usuario
    logout: () => set({ user: null }), // Acción para desloguear al usuario
}), {
    name: "Auth",
}));
