import { useNavigate } from "react-router-dom";
import {
  IdcardOutlined,
  UserAddOutlined,
  WechatOutlined,
} from "@ant-design/icons";

const Nav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div onClick={() => navigate("/")}>
        <IdcardOutlined />
      </div>
      <div onClick={() => navigate("/chat")}>
        <WechatOutlined />
      </div>
      <div onClick={() => navigate("/addCard")}>
        <UserAddOutlined />
      </div>
    </div>
  );
};

export default Nav;
