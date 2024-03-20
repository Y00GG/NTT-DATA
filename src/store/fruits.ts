import { create } from "zustand";
import { IFruitsStore } from "../interfaces/IFruitsStore";
import axios from "axios";
import { IFruits } from "../interfaces/IFruits";

const initialState = {
    fruits: [],
};

export const useFruit = create<IFruitsStore>()((set) => ({
    ...initialState,
    getFruits: async () => {
        const { data } = await axios.get<IFruits[]>('https://mocki.io/v1/0df6544d-9234-4135-ad4e-c2fc718d4ca1')
        console.log(data)
        set({ fruits: data })
    }
}));
