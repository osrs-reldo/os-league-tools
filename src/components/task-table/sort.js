export function sortTask(a, b) {
    return a.values.task.label.localeCompare(b.values.task.label);
}

export function sortDifficulty(a, b) {
    return a.values.difficulty.value - b.values.difficulty.value;
}

export function sortCategory(a, b) {
    const compareVal = a.values.category.category.label.localeCompare(b.values.category.category.label);
    if (compareVal === 0) {
        const subA = a.values.category.subcategory;
        const subB = b.values.category.subcategory;
        return subA.customSort && subB.customSort
            ? subA.customSort - subB.customSort
            : subA.label.localeCompare(subB.label);
    }
    return compareVal;
}
