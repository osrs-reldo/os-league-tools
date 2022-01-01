export default {
    initialState: { hiddenColumns: ['id'] },
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
            if (a.values.difficulty.value === b.values.difficulty.value) {
                return 0;
            }
            return a.values.difficulty.value < b.values.difficulty.value ? -1 : 1;
        },
        category: (a, b) => {
            const compareVal = a.values.category.category.text.localeCompare(b.values.category.category.text);
            if (compareVal === 0) {
                return a.values.category.subcategory.text.localeCompare(b.values.category.subcategory.text);
            }
            return compareVal;
        },
    },
};
