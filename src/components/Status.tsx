type StatusProps = {
    status: string
}


export const Status = (props: StatusProps) => {
    let message 

    if(props.status === 'loading'){
        message = 'Loading...'
    } else if(props.status === 'success'){
        message = 'Data fetched successfully!!'
    } else if(props.status === 'error'){
        message = 'Errorr!!'
    }
    return (
        <div>
            <h3>Status - {message}</h3>
        </div>
    )
}