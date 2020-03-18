const setResults = (resultArr) => {
    return {
        type: "SET_RESULTS",
        payload: resultArr
    }
}

export default {
    setResults
}