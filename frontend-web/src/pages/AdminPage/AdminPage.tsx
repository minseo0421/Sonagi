import { Outlet } from 'react-router-dom';
import { AdminContainer, Header } from '@/pages/AdminPage/AdminPage.style';
import AdminBar from '@/components/molecules/AdminBar/AdminBar';

const AdminPage = () => {
  return (
    <AdminContainer>
      <Header>관리자 페이지</Header>
      <AdminBar />
      <Outlet />
    </AdminContainer>
  );
};

export default AdminPage;
