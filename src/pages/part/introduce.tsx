import { Container } from "react-bootstrap";

const Introduce: React.FC = () => {
  return (
    <Container>
      <Container>
        <div className="mx-5">
          <p>
            안녕하세요, 저는 웹개발자 백엔드 직무를 희망하고 있는 남보람입니다.
          </p>
          <p>
            저는 비록 마케터였지만, Technical SEO 컨설턴트로 근무하며, 여러
            다양한 클라이언트사들의 개발자분들과 협업하며프로젝트를 리딩해온
            경험이 있습니다. 이 과정에서 다른 직군과 직간접적으로 긴밀하게
            커뮤니케이션하며 프로젝트를 리딩했습니다.
          </p>
          <p>
            이후에는 Elice와 KOSTA와 같은 국가훈련기관을 통해 JavaScript, C, C++
            등 다양한 프로그래밍 언어에 대한 기본적인 지식을 쌓았고, 여러 개인
            및 팀과제를 통해 웹사이트 개발에 대한 전문성을 쌓음과 동시에 Git을
            통한 협업 방법에 대한 이해도를 높였습니다.
          </p>
          <p>
            이처럼 개발자로서의 기초 지식과 사용자 친화적인 웹사이트 관리에 대한
            높은 이해도, 그리고 성장에 대한 끊임없는 동기부여라는 세가지 가치를
            추구하며, 이를 바탕으로 비즈니스 성공에 능동적으로 기여하는 개발자가
            되고자 합니다.
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default Introduce;
