import styles from "./place.module.css"

export default function PlaceItem({PlaceObj}){
    return(
        <>
        <h1>
            {PlaceObj.title}
        </h1>
        <h2>
            {PlaceObj.detail}
        </h2>
        </>
    )
}

