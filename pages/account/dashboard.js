import Layout from "@/components/Layout";
import styled from "styled-components";
import PieChart from "@/components/PieChart";
import CylinderChart from "@/components/CylinderChart";
import { CgCheckO, CgCloseO, CgRadioChecked } from "react-icons/cg";
import { FaPercent } from "react-icons/fa";
import parseCookie from "../../utils/parseCookie";
import { API_URL } from "../../config";

export async function getServerSideProps({ req }) {
  const { token } = parseCookie(req);
  const userRes = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const userData = await userRes.json();
  let user = null;
  if (userRes.ok) user = userData;

  return {
    props: { user },
  };
}

const Dashboard = ({ user }) => {
  let wordStats = {};
  let expressionStats = {};

  // try {
  //   wordStats = JSON.parse(user.wordStats);
  //   expressionStats = JSON.parse(user.expressionStats);
  // } catch (e) {
  //   console.error(e);
  // }

  return (
    <Layout title="Dashboard">
      {user ? (
        <Container>
          <Title>{`welcome to your dashboard ${user?.username}`}</Title>
          <ChartsContainer>
            <Wrapper>
              <PieChart wordStats={user?.wordStats} />
              <ChartStats>
                <Icons>
                  <Correct>
                    <CgCheckO size="4rem" />
                    <Text>{user?.wordStats?.correctAnswer}</Text>
                  </Correct>
                  <Wrong>
                    <CgCloseO size="4rem" />
                    <Text>{user?.wordStats?.wrongAnswer}</Text>
                  </Wrong>
                  <Sum>
                    <CgRadioChecked size="4.2rem" />
                    <Text>{user?.wordStats?.answerSum}</Text>
                  </Sum>
                  <Average>
                    <FaPercent size="3rem" />
                    <Text>{user?.wordStats?.average}</Text>
                  </Average>
                </Icons>
              </ChartStats>
            </Wrapper>
            <Wrapper>
              <CylinderChart expressionStats={expressionStats} />
              <ChartStats>
                <Icons>
                  <Correct>
                    <CgCheckO size="4rem" />
                    <Text>{user?.expressionStats?.correctAnswer}</Text>
                  </Correct>
                  <Wrong>
                    <CgCloseO size="4rem" />
                    <Text>{user?.expressionStats?.wrongAnswer}</Text>
                  </Wrong>
                  <Sum>
                    <CgRadioChecked size="4.2rem" />
                    <Text>{user?.expressionStats?.answerSum}</Text>
                  </Sum>
                  <Average>
                    <FaPercent size="3rem" />
                    <Text>{user?.expressionStats?.average}</Text>
                  </Average>
                </Icons>
              </ChartStats>
            </Wrapper>
          </ChartsContainer>
        </Container>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: 50 }}>
          Login to access your dashboard!
        </h2>
      )}
    </Layout>
  );
};

export default Dashboard;

const Container = styled.article`
  margin-top: 5vh;
`;

const Title = styled.h1`
  text-align: center;
`;

const ChartsContainer = styled.div`
  padding: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChartStats = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: auto;
`;

const Correct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3px;
`;
const Wrong = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3px;
`;
const Sum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Average = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
