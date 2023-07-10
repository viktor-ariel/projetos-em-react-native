import { Coordinate } from "../types/types";

export const checkEatsFood = (
    head: Coordinate,
    food:Coordinate,
    area: number
): boolean =>{
    const DistanciaEntreComidaECobraX: number = Math.abs(head.x - food.x);
    const DistanciaEntreComidaECobray: number = Math.abs(head.y - food.y);
    return(
        DistanciaEntreComidaECobraX < area && DistanciaEntreComidaECobray < area
    )

}