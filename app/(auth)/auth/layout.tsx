/** @format */

import Banner from "../auth/components/banner";

interface IProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" flex items-center justify-center h-screen bg-gray-50">
      <Banner />
      {children}
    </div>
  );
};
export default RootLayout;
