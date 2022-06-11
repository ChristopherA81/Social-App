import './chatOnline.css';

export default function ChatOnline () {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg"
            src="https://images.unsplash.com/photo-1615567964485-0ee76b5b3410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt=""
          />
          <div className="chatOnlineBadge" /></div>
      </div>
      <span className="chatOnlineName">John Doe</span>
      

    </div>
  );
}
