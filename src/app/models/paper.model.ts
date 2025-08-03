import { Dictionary } from "./dictionary.type";
import { PapersCategoryTypes } from "./papers-category-types.enum";

export interface Paper {
    id: number;
    title: Dictionary<string>;
    description: Dictionary<string>;
    papersCategoryTypes: PapersCategoryTypes;
    url: string;
}