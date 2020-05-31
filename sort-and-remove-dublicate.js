function sortDistinct(nums = []) {
    let lgth = nums.length;
    const sortNums = nums.sort();
    const distinctNums = sortNums.reduce((pv, cv, ci, arr) => {
        if (!pv.includes(cv)) {
            pv.push(cv);
        }
        return pv;
    }, []);
    // return sort[sort.length - 2]
    return distinctNums;
}
console.log('sortDistinct([1, 5, 4, 6, 6]): ', sortDistinct([1, 5, 4, 6, 6]));