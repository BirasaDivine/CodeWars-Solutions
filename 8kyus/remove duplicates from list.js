function distinct(a) {
    const result = [];
    const seen = new Set();

    for (let i = 0; i < a.length; i++) {
        if (!seen.has(a[i])) {
            seen.add(a[i]);
            result.push(a[i]);
        }
    }

    return result;
}