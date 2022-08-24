type PersonProps = {
    name: {
        firstName: string,
        lastName: string
    }
}

export const Person = (props: PersonProps) => {
    return <h2>{props.name.firstName} {props.name.lastName}</h2>
}