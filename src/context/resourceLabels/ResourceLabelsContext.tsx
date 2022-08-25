import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import RequestLabelsJSON from "../../resources/ResourceLabels.json"

interface ResourceLabel {
    idResource: string;
    value: string;
}

interface ResourceLabelsContextProps {
    resourceLabels: ResourceLabel[];
}

export const ResourceLabelsContext = createContext<ResourceLabelsContextProps>({
    resourceLabels: []

})


interface ResourceLabelsProviderProps {
    children: React.ReactNode;
}

export const ResourceLabelsProvider = (props: ResourceLabelsProviderProps) => {

    const { setValue, storedValue } = useLocalStorage("resourceLabels", null)

    const [resourceLabels, setresourceLabels] = useState([...RequestLabelsJSON.resourceModel])

    useEffect(() => {
        if (!storedValue) {

            setValue(resourceLabels)
        }

    }, [])


    return (
        <ResourceLabelsContext.Provider value={{ resourceLabels: storedValue }}>
            {props.children}
        </ResourceLabelsContext.Provider>
    )
}