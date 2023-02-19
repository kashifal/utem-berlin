
export const useHelperFunctions = () => {

    const capitalizeFirstLetter = (str) => {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    return {
        capitalizeFirstLetter
    }
}