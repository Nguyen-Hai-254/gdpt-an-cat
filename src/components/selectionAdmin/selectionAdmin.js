import { MenuItem, Select } from "@mui/material"
import { useState } from "react"


const Selection = ({ lessonId, orderLesson, setOrderLesson }) => {
    const [order, setOrder] = useState(orderLesson)

    const handleSetOrderLesson = (value) => {
        setOrder(value)
        setOrderLesson(lessonId, value)
    }

    return (
        <Select
            value={order ?? ""}
            onChange={(e) => handleSetOrderLesson(e.target.value)}
        >
            {[...Array(40).keys()].map((index) => {
                return (
                    <MenuItem key={index} value={index + 1}>
                        {index + 1}
                    </MenuItem>
                )
            })}
        </Select>
    )
}

export default Selection;