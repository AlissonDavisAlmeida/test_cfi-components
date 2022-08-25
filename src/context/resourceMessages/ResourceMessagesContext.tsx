import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import RequestLabelsJSON from "../../resources/ResourceMessages.json"

interface ResourceMessage {
    idResource: string;
    message: string;
}

interface ResourceMessagesContextProps {
    resourceMessages: ResourceMessage[];
}

export const ResourceMessagesContext = createContext<ResourceMessagesContextProps>({

    resourceMessages: []
})


interface ResourceMessagesProviderProps {
    children: React.ReactNode;
}

export const ResourceMessagesProvider = (props: ResourceMessagesProviderProps) => {

    const { setValue, storedValue } = useLocalStorage("resourceMessages", null)

    const [resourceLabels, setresourceLabels] = useState([...RequestLabelsJSON.resourceMessage])

    useEffect(() => {
        if (!storedValue) {

            setValue(resourceLabels)
        }

    }, [])


    return (
        <ResourceMessagesContext.Provider value={{ resourceMessages: storedValue }}>
            {props.children}
        </ResourceMessagesContext.Provider>
    )
}