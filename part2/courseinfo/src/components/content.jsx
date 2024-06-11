import { Part } from "./part"

export const Content = ({parts}) =>{
    return(
        <div>
            {parts.map(part => (
                <Part key={part.key} part={part.name} exercise={part.exercises}/>
            ))}
        </div>
    )
}