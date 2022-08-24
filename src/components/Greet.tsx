type GreetProps = {
    name: string,
    num?: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { num = 0} = props
    return (
        <div>
            { props.isLoggedIn ? <h2>Welcome {props.name}! You have {props.num} unread messages</h2> : <h2>Welcome GUEST! You have {props.num} unread messages</h2> }
        </div>
    ) 

}