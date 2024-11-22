import { FaMapMarkerAlt } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import { Github, Linkedin } from "react-bootstrap-icons";

const Pinfo: React.FC = () => {
  return (
    <div className="info_header">
      <h2 className="name ms-3">
        <b>
          남 보 람
          <br />
          Nam Boram
        </b>
        <br />
        <a
          href="https://github.com/Claire-Nam"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Github className="ms-2 mt-2" size={30}></Github>
        </a>
        <a
          href="https://www.linkedin.com/in/claire-nam-b7316a187/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Linkedin className="ms-3 mt-2" size={30}></Linkedin>
        </a>
      </h2>
      <div className="personal_info">
        <p>
          <CgPhone />
          <span className="ps-2">
            <a href="tel:010-6793-5258">010-6793-5258</a>
          </span>
        </p>
        <p>
          <IoIosMail />
          <span className="ps-2">
            <a href="mailto:nbr1023@naver.com">nbr1023@naver.com</a>
          </span>
        </p>
        <p>
          <FaMapMarkerAlt />
          <span className="ps-2">경기도 화성시 청계동</span>
        </p>
      </div>
    </div>
  );
};

export default Pinfo;
