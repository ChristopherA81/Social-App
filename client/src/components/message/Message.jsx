import './message.css';

export default function Message ({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
        className="messageImg"
          src="https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <p className="messageText">Hello this is my message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>

    </div>
  );
}
