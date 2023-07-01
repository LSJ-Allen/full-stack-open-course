const Message = ({msg}) => {
    if(msg === null){
        return null
    }

    return(
        <div className="msg">
            {msg}
        </div>
    )
}
 
export default Message;