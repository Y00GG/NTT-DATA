import { IFruits } from "./IFruits";

export interface IFruitsStore {
    fruits: IFruits[]
    getFruits: () => void,
}

