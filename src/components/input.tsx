
interface Input {
    type: string;
    id: string;
    name: string;
}

export const Input =({type, id, name} : Input) => {
    return (
        <input type={type} id={id} name={name} required /> 
    )
}