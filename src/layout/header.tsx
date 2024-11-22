import React, { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin } from "react-bootstrap-icons";

const Header: React.FC = () => {
  const location = useLocation(); // 현재 경로 확인
  const navigate = useNavigate();

  // 초기 상태를 URL 경로에 따라 설정
  const [currentPage, setCurrentPage] = useState(
    location.pathname === "/letter" ? "letter" : "resume"
  );
  const [buttonText, setButtonText] = useState(
    location.pathname === "/letter" ? "이력서로" : "자소서로"
  );
  const [show, setShow] = useState(false);

  useEffect(() => {
    // URL 변경 시 상태 업데이트
    if (location.pathname === "/resume") {
      setCurrentPage("resume");
      setButtonText("자소서로");
    } else if (location.pathname === "/letter") {
      setCurrentPage("letter");
      setButtonText("이력서로");
    }
  }, [location.pathname]);

  const handleToggle = () => setShow(!show);
  const handleClose = () => setShow(false);

  const handleButtonClick = () => {
    if (currentPage === "resume") {
      navigate("/letter");
    } else {
      setCurrentPage("resume");
      navigate("/resume");
    }
  };

  // 이력서 메뉴
  const resumeMenuItems = [
    { href: "#summary", label: "Summary" },
    { href: "#project", label: "Projects" },
    { href: "#work", label: "Work Experience" },
    { href: "#education", label: "Education" },
    { href: "#language", label: "Language" },
    { href: "#link", label: "Links" },
    { href: "#blog", label: "Blog" },
  ];

  // 자소서 메뉴
  const letterMenuItems = [
    { href: "#introduce", label: "자기 소개" },
    { href: "#change", label: "직무 전환 사유" },
    { href: "#apply", label: "직무 지원 동기" },
    { href: "#after", label: "입사 후 포부" },
  ];

  return (
    <Container>
      <Navbar bg="light" expand={false} fixed="top">
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleToggle}
          className="ms-3"
        ></Navbar.Toggle>
        <Button
          variant="outline-secondary"
          className="ms-2 me-4"
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>메뉴</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {(currentPage === "resume" ? resumeMenuItems : letterMenuItems).map(
              (item, index) => (
                <Nav.Link
                  key={index}
                  href={item.href}
                  onClick={handleClose}
                  className="nav-link-custom"
                >
                  {item.label}
                </Nav.Link>
              )
            )}
            <div className="d-flex justify-content-start align-items-center mt-3">
              <Nav.Link
                href="https://github.com/Claire-Nam"
                target="_blank"
                onClick={handleClose}
                className="d-inline-flex align-items-center"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Github size={25} />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/claire-nam-b7316a187/"
                target="_blank"
                onClick={handleClose}
                className="d-inline-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <Linkedin size={25} />
              </Nav.Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default Header;
