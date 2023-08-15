import { styled } from 'styled-components';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(254, 229, 229);
  font-size: 25px;
  height: 50px;
  color: #5d5d5d;
  margin-bottom: 55px;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  table {
    width: 90%;
    table-layout: fixed;
    border-collapse: separate;
  }
  th {
    border-bottom: 2px solid #ffcaca;
    color: #5d5d5d;
  }
  td,
  th {
    padding: 1em 0.5em;
    text-align: center;
  }
  td {
    border-bottom: 1px solid #e1e1e1;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  a:link {
    text-decoration: none;
  }
  td:nth-child(2) {
    text-align: left;
  }
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto 0 auto;
  width: 80%;
  a:link {
    text-decoration: none;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  input,
  textarea {
    border: none;
    width: 100%;
  }
  input {
    font-weight: bold;
    font-size: 20px;
  }
  textarea {
    font-size: 15px;
    min-height: 150px;
  }
`;
const DetailTitle = styled.div`
  text-align: left;
  border-bottom: 2px solid #ffcaca;
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 5px;
`;
const DetailContent = styled.div`
  font-size: 15px;
  margin-top: 10px;
  min-height: 150px;
`;
const AdminButton = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 1rem;

  font-size: 1rem;
  font-weight: 400;
  border-radius: 5px;
  border: 2px solid pink;
`;
const AdminButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const QuestionDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
const RestoreContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  table {
    width: 95%;
    table-layout: fixed;
    border-collapse: separate;
  }
  th {
    text-align: center;
    border-bottom: 2px solid #ffcaca;
    color: #5d5d5d;
  }
  td,
  th {
    padding: 1em 0.5em;
  }
  td {
    border-bottom: 1px solid #e1e1e1;
    text-decoration: none;
    text-align: center;
  }
  a:link {
    text-decoration: none;
  }
  td:nth-child(3),
  td:nth-child(5) {
    font-size: 14px;
  }
`;
const CreateButton = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 10px;
  width: 95%;
  a:link {
    text-decoration: none;
  }
`;
export {
  AdminContainer,
  Header,
  MainContainer,
  ListContainer,
  ContentContainer,
  DetailTitle,
  DetailContent,
  AdminButton,
  AdminButtonContainer,
  QuestionDetailContainer,
  RestoreContainer,
  DetailContainer,
  CreateButton,
};
