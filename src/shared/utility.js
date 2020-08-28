export const updateObject = (oldObject, updatedProperties) => {
    console.log("UpdatedObjects")
    return {
        ...oldObject,
        ...updatedProperties
    };
};