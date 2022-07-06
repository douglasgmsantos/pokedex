export const numberIsUndefinedOrNullOrNan = (value : number) => (
    value === null || value === undefined || isNaN(value) 
)