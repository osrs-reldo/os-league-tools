import { useState, useCallback } from "react";
import { parse, stringify } from "query-string";

/** shamelessly copy/pasted https://medium.com/swlh/81ccdfcb174f **/
export default function useQueryString(key, initialValue) {
    const [value, setValue] = useState(getQueryStringValue(key) || initialValue);
    const onSetValue = useCallback(
        newValue => {
            setValue(newValue);
            setQueryStringValue(key, newValue);
        },
        [key]
    );

    return [value, onSetValue];
}

function setQueryStringWithoutPageReload(qsValue) {
    const newurl = window.location.protocol + "//" +
        window.location.host +
        window.location.pathname +
        qsValue +
        window.location.hash ;
        console.log("new url: " + newurl)

    window.history.pushState({ path: newurl }, "", newurl);
};

function setQueryStringValue(key, value, queryString = window.location.search) {
    const values = parse(queryString);
    const newQsValue = stringify({ ...values, [key]: value });
    setQueryStringWithoutPageReload(`?${newQsValue}`);
};

function getQueryStringValue(key, queryString = window.location.search) {
    const values = parse(queryString);
    return values[key];
};