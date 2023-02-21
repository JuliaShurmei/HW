
interface Butt {
    value: string;
    className: string;
}

export const Button =({value, className} : Butt) => {
    return (
        <button type="submit" className={className}> {value} </button>
    )
}