export default {
    initialState: { hiddenColumns: ['id'] },
    defaultColumn: () => ({
        minWidth: 30,
        width: 150,
        maxWidth: 1000,
    }),
    data: {
        task: row => {
            return { text: row.text, description: row.description };
        },
        category: row => {
            return { category: row.category, subcategory: row.subcategory };
        },
    },
    sort: {
        task: (a, b) => a.values.task.text.localeCompare(b.values.task.text),
        difficulty: (a, b) => {
            return a.values.difficulty.value - b.values.difficulty.value;
        },
        category: (a, b) => {
            const compareVal = a.values.category.category.text.localeCompare(b.values.category.category.text);
            if (compareVal === 0) {
                const subA = a.values.category.subcategory;
                const subB = b.values.category.subcategory;
                return subA.customSort && subB.customSort
                    ? subA.customSort - subB.customSort
                    : subA.text.localeCompare(subB.text);
            }
            return compareVal;
        },
    },
};
